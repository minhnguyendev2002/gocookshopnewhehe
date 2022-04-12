import React from 'react';
import Header from "../../Components/Header/Header";
import MemberTable from "../../Components/Table/memberTable"

const OrderDetail = () => {
  return (
    <>
    <div className="content">
      <Header title="Member List"/>
      <div className="box">
        <MemberTable />
      </div>
    </div>
    </>
  )
}

export default OrderDetail