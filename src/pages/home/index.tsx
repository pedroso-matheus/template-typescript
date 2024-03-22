import React from 'react';

import MainContainer from '../../components/MainContainer';
import Wrapper from '../../components/Wrapper';
import DataTable from '../../components/DataTable';

const Home = () => {

  // Exemplo de dados dos usuários
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];

  // Configuração das colunas para o DataTable
  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email', render: (row: any) => <a href={`mailto:${row.email}`}>{row.email}</a> },
  ];

  return (
    <MainContainer>
      <Wrapper padding={"30px"}>        
          <h1>Home</h1>
          <p>Ir para Login</p>        
      </Wrapper>
      <Wrapper padding={"30px"}>
        <DataTable columns={columns} data={users} /> 
      </Wrapper>
    </MainContainer>
  );
};

export {Home} ;