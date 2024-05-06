import React from 'react';

import { DataTable } from '../DataTable';

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { ISampleData, IListSampleData } from './types';

const ListSampleData = ( {sampleData}:IListSampleData ) => {

    //const navigate = useNavigate(); // Hook para redirecionamento
  
    //const redirectToUserActivities = (userId: string) => {
    //  navigate(`/userActivities?id=${userId}`); 
    //};
  
    const columns: ColumnDef<ISampleData>[] = [
      {
        accessorKey: 'full_name',
        header: ({ column }) => (
          <span onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Full Name <ArrowUpDown className="h-2 w-2" />
          </span>
        ),  
        cell: ({ row }) => (
      //    <a onClick={() => redirectToUserActivities(row.original.id)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
              <span>{row.getValue('full_name')} </span>
      //    </a>
        ),
        meta: { label: 'Full Name' },
      },
      {
        accessorKey: 'email',
        header: ({ column }) => (
          <span onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Email <ArrowUpDown className="h-2 w-2" />
          </span>
        ),
        meta: { label: 'Email' }, // Corrigido aqui
      },
      {
        accessorKey: 'date_of_birth',
        header: ({ column }) => (
          <span onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Date of Birth <ArrowUpDown className="h-2 w-2" />
          </span>
        ),
        meta: { label: 'Date of Birth' }, // Corrigido aqui
      },      
      {
        accessorKey: 'mobile_number',
        header: ({ column }) => (
          <span onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Mobile Number <ArrowUpDown className="h-2 w-2" />
          </span>
        ),
        meta: { label: 'Mobile Number' }, // Corrigido aqui
      },      
    ];
       
    return (
      <DataTable columns={columns} data={sampleData} filterColumns={['full_name', 'email']} /> 
    );
  };

  export default ListSampleData;