export interface IColumn {
    key: string;
    title: string;
    render?: (row: any) => JSX.Element;
  }
  
  export interface IDataTableProps {
    columns: IColumn[];
    data: any[];
    onSort?: (key: string, order: 'asc' | 'desc') => void;
    onSearch?: (query: string) => void;
    onPageChange?: (pageNumber: number) => void;
    pageSize?: number;
  }
  