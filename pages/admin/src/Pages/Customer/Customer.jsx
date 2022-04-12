import React from 'react';
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/customerTable"

const Customer = () => {
  return (
    <>
    <div className="content">
      <Header title="Customer"/>
      <div className="box">
        <Table />
      </div>
    </div>
    </>
  )
}

export default Customer