import React from 'react';

import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Row from '../../components/Row';
import { DataTable } from '../../components/DataTable';

import { columns } from '../../components/Payments/Columns';

const Home = () => {

  type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }
  
  const payments: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "c@gmail.com",
    },
    {
      id: "5465456",
      amount: 125,
      status: "processing",
      email: "b@gmail.com",
    },
    {
      id: "64445",
      amount: 300,
      status: "success",
      email: "a@gmail.com",
    },    
    {
      id: "554564",
      amount: 300,
      status: "success",
      email: "d@gmail.com",
    },        
    {
      id: "489e1d42",
      amount: -2,
      status: "pending",
      email: "f@gmail.com",
    },        
  ]

  return (
    <>
      <Header title={"TEMPLATE"} />
      <Wrapper padding={"30px"}>
        <Row justify={"space-between"}>                        
            <Button label={"Botão"} href={'/login'} />
            <Button backgroundColor={"#ff0000"} color={'#00ff00'} borderColor={'#000fff'} />
            <Button backgroundColor={"#ff0000"} color={'#00ff00'}  />
        </Row>
      </Wrapper>
      <Wrapper padding={"30px"}>        
          <DataTable columns={columns} data={payments} />      
      </Wrapper>
    </>
  );
};

export {Home} ;