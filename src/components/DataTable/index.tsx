import React from 'react';

import { flexRender, getCoreRowModel,  useReactTable, SortingState, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, ColumnFiltersState
} from "@tanstack/react-table";

import { TableContainer, Table, TableHead, TableHeader, TableRow, TableBody, TableData } from './styles';

import { useState } from 'react';

import { DataTableProps } from "./types";
import Row from '../Row';

export function DataTable<TData, TValue>({ columns, data, filterColumns  }: DataTableProps<TData, TValue>) {
    
    const [pageSize, setPageSize] = useState(10); // Itens por página
    const [pageIndex, setPageIndex] = useState(0); // Página atual, começando do 0
    
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
          sorting,
          columnFilters,
          pagination: {
            pageIndex,
            pageSize,
          },          
        },
    })

    function renderPaginationInfo() {
        const totalRowsOnPage = table.getRowModel().rows.length; 
        const totalGeneralRows = data.length; 
        const firstItemIndex = pageIndex * pageSize + 1;
        const lastItemIndex = Math.min(pageIndex * pageSize + totalRowsOnPage, totalGeneralRows);
        const isShowing = totalRowsOnPage ? `Mostrando ${firstItemIndex} a ${lastItemIndex} de ${totalGeneralRows} itens` : 'Nenhum item para mostrar';
    
        return <span>{isShowing}</span>;
    }
    

    return (
        <>
            <Row justify={"space-evenly"}> 
                {filterColumns?.map((columnId) => (
                    <div key={columnId}>
                        <input
                            placeholder={`Filter ${columnId}...`}
                            value={(table.getColumn(columnId)?.getFilterValue() as string) ?? ""}
                            onChange={(event) => table.getColumn(columnId)?.setFilterValue(event.target.value)}
                            className="max-w-sm"
                        />
                    </div>
                ))}
            </Row>    
            <Row justify={'space-between'}>                
                <span> {renderPaginationInfo()}</span>           
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {[5, 10, 25, 50, 100, 1000].map(size => (
                        <option key={size} value={size}>
                            Mostrar {size}
                        </option>
                    ))}
                </select>                    
            </Row>         
            <Row>
                <TableContainer>
                    <Table>
                        <TableHead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                <TableHeader key={header.id}>
                                    {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                        )}
                                </TableHeader>
                                )
                            })}
                            </TableRow>
                        ))}
                        </TableHead>
                        <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                <TableData key={cell.id} data-label={`${cell.column.columnDef.meta?.label}: `} >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableData>
                                ))}
                            </TableRow>
                            ))
                        ) : (
                            <TableRow>
                            <TableData colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableData>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Row>
            <Row justify={'space-between'}>
                <Row>
                    <span> Page {pageIndex + 1} de {table.getPageCount()} </span>    
                </Row>            
                <Row justify={'flex-end'}>                
                    <button onClick={() => setPageIndex(old => Math.max(0, old - 1))}>Anterior</button>
                    <button onClick={() => setPageIndex(old => (old + 1 < table.getPageCount() ? old + 1 : old))}>Próximo</button>
                </Row>             
            </Row>             
        </>
    )
}
