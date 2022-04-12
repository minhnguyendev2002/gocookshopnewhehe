import { Table, Button, Pagination } from 'rsuite';
import React from 'react';  
import 'rsuite/dist/rsuite.min.css';
import "./Table.css";
import Data from "../../Data/Customer.json";

const App = () => {
  const {Column, Cell, HeaderCell} = Table;
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const [modal, setModal] = React.useState(false);
  const [dataModal, setModalData] = React.useState({});

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };
  
  const [data, setData] = React.useState(Data.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  }))

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = +x
        }
        if (typeof y === 'string') {
          y = +y
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  const EditCell = ({ rowData, dataKey, onChange, ...props }) => {
    const editing = rowData.status === 'EDIT';
    return (
      <Cell {...props} className={editing ? 'table-content-editing' : ''}>
        {editing ? (
          <input
            className="rs-input"
            value={rowData[dataKey]}
            onChange={event => {
              onChange && onChange(rowData.id, dataKey, event.target.value);
            }}
          />
        ) : (
          <span className="table-content-edit-span">{rowData[dataKey]}</span>
        )}
      </Cell>
    );
  };

  const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <Cell {...props} style={{ padding: '6px' }}>
        <Button
          onClick={() => {
            onClick && onClick(rowData.id);
          }}
        >
          <span className="action-cell">{rowData.status === 'EDIT' ? <i className="fa-solid fa-check save"></i> : <i className="fa-solid fa-pen-to-square edit"></i>}</span>
        </Button>
      </Cell>
    );
  };

  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find(item => item.id === id)[key] = value;
    setData(nextData);
  };
  const handleEditState = id => {
    const nextData = Object.assign([], data);
    const activeItem = nextData.find(item => item.id === id);
    activeItem.status = activeItem.status ? null : 'EDIT';
    setData(nextData);
  };

  const Modal = () => {
    return (
      <>
      <div className={modal ? "d-block":"d-none"}>
        <div className="modal-container">
          <div className="modal-overley"></div>
          <div className="row modal-box py-3 align-items-center position-relative">
            <div onClick={() => setModal(modal ? false:true)} className="position-absolute times-button text-center"><i className="fa-solid fa-xmark"></i></div>
            <div className="col-4"><img className="w-100" src={dataModal.avatar} alt={dataModal.name} /></div>
            <div className="col-8">
              <h3>{dataModal.name}</h3>
              <span>{dataModal.type}</span>
              <div className="mt-4">
                <p><strong>Số điện thoại:</strong> {dataModal.phone}</p>
                <p><strong>Địa chỉ:</strong> {dataModal.adress}</p>
                <p><strong>Email:</strong> {dataModal.email}</p>
                <p><strong>Coin:</strong> {dataModal.coin}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <Table
      height={460}
      data={getData()}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}
      onRowClick={data => {
        setModalData(data)
      }}
    >
      <Column width={70} align="center">
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" onClick={()=>setModal(true)}/>
      </Column>
      <Column width={200} align="center">
        <HeaderCell>Họ tên</HeaderCell>
        <EditCell dataKey="name" onChange={handleChange} />
      </Column>
      <Column width={160}>
        <HeaderCell>Số điện thoại</HeaderCell>
        <EditCell dataKey="phone" onChange={handleChange} />
      </Column>
      <Column width={215}>
        <HeaderCell>Email</HeaderCell>
        <EditCell dataKey="email" onChange={handleChange} />
      </Column>
      <Column width={110}>
        <HeaderCell>Địa chỉ</HeaderCell>
        <EditCell dataKey="adress" onChange={handleChange} />
      </Column>
      <Column width={150} align="center" sortable>
        <HeaderCell align="center">Coin</HeaderCell>
        <EditCell dataKey="coin" onChange={handleChange} />
      </Column>
      <Column width={140} align="center" sortable>
        <HeaderCell>Đã tiêu ($)</HeaderCell>
        <EditCell dataKey="purchased" onChange={handleChange} />
      </Column>
      <Column width={145} align="center">
        <HeaderCell>Action</HeaderCell>
        <ActionCell dataKey="id" onClick={handleEditState} />
      </Column>
    </Table>
    <div className="pagination-box">
      {
          data &&
          <Pagination
              prev
              next
              first
              last
              ellipsis
              boundaryLinks
              maxButtons={5}
              size="xs"
              layout={[ '-', 'pager']}
              total={Data.length}
              limitOptions={[10, 20]}
              limit={limit}
              activePage={page}
              onChangePage={setPage}
              onChangeLimit={handleChangeLimit}
          />
      }
    </div>
    <Modal />
    </>
  );
};

export default App