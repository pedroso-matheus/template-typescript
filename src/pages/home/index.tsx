import React from 'react';

import Wrapper from '../../components/Wrapper';
import ListSampleData from '../../components/ListSampleData';

import { ISampleData } from '../../components/ListSampleData/types';

const Home = () => {
  
  const sampleData: ISampleData[] = [
    {
      full_name: "João Guilherme",
      email: "joaoguilherme@teste.com.br",
      date_of_birth: "04/05/1984",
      mobile_number: "(19)91454-7853",
    },
    {
      full_name: "Patricia Silva",
      email: "patriciasilva@teste.com.br",
      date_of_birth: "08/12/1992",
      mobile_number: "(13)94843-4548",
    },
    {
      full_name: "Sophi Gomes",
      email: "sophigomes@teste.com.br",
      date_of_birth: "03/08/2004",
      mobile_number: "(19)99878-4498",
    },            
  ]

  return (
    <>
      <Wrapper padding={"30px"}>             
        <ListSampleData sampleData={sampleData} />
      </Wrapper>  
    </>
  );
};

export {Home} ;