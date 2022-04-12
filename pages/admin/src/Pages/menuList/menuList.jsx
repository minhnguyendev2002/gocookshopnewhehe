import React from 'react';
import Header from "../../Components/Header/Header"
import Table from "../../Components/Table/menuTable"
const OrderList = () => {
  return (
    <>
    <div className="content">
      <Header title="Menu List"/>
      <div className="box">
        <Table />
      </div>
    </div>
    </>
  )
}

export default OrderList