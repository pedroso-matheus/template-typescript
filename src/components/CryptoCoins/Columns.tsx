import React from 'react';

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"


export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <span
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome <ArrowUpDown className="h-2 w-2" />
        </span>
      )
    },  },
  {
    accessorKey: "preco",
    header: ({ column }) => {
      return (
        <span
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Preço <ArrowUpDown className="h-40 w-40" />
        </span>
      )
    },
  },
  {
    accessorKey: "MarketCap",
    header: ({ column }) => {
      return (
        <span
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          MarketCap <ArrowUpDown className="h-40 w-40" />
        </span>
      )
    },
  },
  {
    accessorKey: "period",
    header: ({ column }) => {
      return (
        <span
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          % no Periodo <ArrowUpDown className="h-40 w-40" />
        </span>
      )
    },
  },
  /*
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <span
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount <ArrowUpDown className="h-40 w-40" />
        </span>
      )
    },

    cell: (info) => {
      const value = info.getValue();

      if (value === null || value === undefined) {
        return '';
      }

      if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
        return value.toString();
      }

      if (typeof value === 'object') {
        return JSON.stringify(value);
      }

      return '';},

    filterFn: (row, columnId, filterValue) => {
      
      const rowValue = row.getValue(columnId);
      
      let valueAsString: string;

      if (typeof rowValue === 'number') {
        valueAsString = rowValue.toString();
      } else if (typeof rowValue === 'string') {
        valueAsString = rowValue;
      } else {
          valueAsString = ''; 
      }

      const filterValueString = filterValue as string;
  
      return valueAsString.includes(filterValueString);
    },
  }
  */
]

