import { Table, Button, Pagination } from 'rsuite';
import React from 'react';  
import 'rsuite/dist/rsuite.min.css';
import "./Table.css";
import Data from "../../Data/oderList.json";

const App = () => {
  const {Column, Cell, HeaderCell} = Table;
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();

  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const [filter, setFilter] = React.useState("Tất cả")

  const [data, setData] = React.useState(Data.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  }))
  
  React.useEffect(() => {
    setData(
        Data.filter((v, i) => {
            const start = limit * (page - 1);
            const end = start + limit;
            return i >= start && i < end;
        })
    )
  }, [page, limit])

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };

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
    setTimeout(() => {
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  const StatusCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <Cell {...props} style={{ padding: '6px' }} className="text-center">
        <span className={`status-${rowData[dataKey]} d-inline-block`}>
            {rowData[dataKey] === null ? "Chưa giao" : (rowData[dataKey] ? "Đã giao" : "Đang giao")}
        </span>
      </Cell>
    );
  };

  const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <Cell {...props} style={{ padding: '6px' }} className="text-center">
        <Button className="mx-1" 
          onClick={() => {
            setData(data.filter(item => item.id !== rowData.id))
          }}
        ><span className="action-cell"><i className="fa-solid fa-trash-can"></i></span></Button>
      </Cell>
    );
  };


  return (
    <>
    <div className="change-filter">
        <span className={filter === "Tất cả" ? "active-filter":""} onClick={()=> {setData(Data.filter(item => item)); setFilter("Tất cả")}}>Tất cả</span>
        <span className={filter === "Đã giao" ? "active-filter":""} onClick={()=> {setData(Data.filter(item => item.status === true)); setFilter("Đã giao")}}>Đơn đã giao</span>
        <span className={filter === "Đang giao" ? "active-filter":""} onClick={()=> {setData(Data.filter(item => item.status === false)); setFilter("Đang giao")}}>Đơn đang giao</span>
        <span className={filter === "Chưa giao" ? "active-filter":""} onClick={()=> {setData(Data.filter(item => item.status === null)); setFilter("Chưa giao")}}>Đơn chưa giao</span>
    </div>
    <Table
      height={460}
      data={getData()}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
    >
      <Column width={120} align="center">
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column width={200} align="center">
        <HeaderCell>Người dùng</HeaderCell>
        <Cell dataKey="customerName" />
      </Column>
      <Column width={250} align="center">
        <HeaderCell>Menu</HeaderCell>
        <Cell dataKey="nameFood" />
      </Column>
      <Column width={200} align="center">
        <HeaderCell>Địa chỉ</HeaderCell>
        <Cell dataKey="adress" />
      </Column>
      <Column width={120} align="center" sortable>
        <HeaderCell>Tổng tiền ($)</HeaderCell>
        <Cell dataKey="amount" />
      </Column>
      <Column width={140} align="center">
        <HeaderCell>Trạng thái</HeaderCell>
        <StatusCell dataKey="status" />
      </Column>
      <Column width={165} align="center">
        <HeaderCell>Action</HeaderCell>
        <ActionCell dataKey="id" />
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
    </>
  );
};

export default App