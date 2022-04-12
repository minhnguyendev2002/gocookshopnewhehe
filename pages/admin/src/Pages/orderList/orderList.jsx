import React from 'react';
import Header from "../../Components/Header/Header"
import Table from "../../Components/Table/orderTable"
const OrderList = () => {
  return (
    <>
    <div className="content">
      <Header title="Order List"/>
      <div className="box">
        <Table />
      </div>
    </div>
    </>
  )
}

export default OrderList