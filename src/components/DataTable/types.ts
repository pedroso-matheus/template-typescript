import '@tanstack/react-table';
import { ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<any, TValue>[]
    data: any[],
    filterColumns?: string[]; // Adiciona a propriedade opcional filterColumns
  }


declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    label?: string;
  }
}