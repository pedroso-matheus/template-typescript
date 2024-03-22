import React from 'react';
import { IDataTableProps } from './types';
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell, TableBody } from './styles';

const DataTable = ({ columns, data, onSort }: IDataTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.key} onClick={() => onSort && onSort(column.key, 'asc')}>
              {column.title}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {column.render ? column.render(row) : row[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
