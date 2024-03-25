import React from 'react';

import { flexRender, getCoreRowModel,  useReactTable, SortingState, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, ColumnFiltersState
} from "@tanstack/react-table";

import { Table, TableHead, TableHeader, TableRow, TableBody, TableData } from './styles';

import { DataTableProps } from "./types";
import Row from '../Row';


export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {

    
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
          sorting,
          columnFilters,
        },
    })

    return (
        <>
            <Row justify={"space-between"}> 
                <input placeholder="Filter Status..."
                    value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("status")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />            
                <input placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <input placeholder="Filter amount..."
                    value={(table.getColumn("amount")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("amount")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />                                                                               
         
            </Row>
            <Row>
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
                            <TableData key={cell.id}>
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
            </Row>
        </>
    )
}
