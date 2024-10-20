"use client";
import React from "react";
import {
  ColumnDef,
  PaginationState,
  Table as TanStackTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { InferSelectModel } from "drizzle-orm";
import { feedbackOnlyFacialExpression } from "@/db/schema";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Frown,
  Meh,
  Smile,
} from "lucide-react";

type FeedbackFace = InferSelectModel<typeof feedbackOnlyFacialExpression>;

function TableFace(props: { data: FeedbackFace[] }) {
  const columns = React.useMemo<ColumnDef<FeedbackFace>[]>(
    () => [
      {
        accessorKey: "faceRating",
        header: () => "Feedback",
        cell: (info) => {
          const rating = info.getValue() as number;
          switch (rating) {
            case 1:
              return <Frown className="text-red-500" />;
            case 2:
              return <Meh className="text-yellow-500" />;
            case 3:
              return <Smile className="text-green-500" />;
            default:
              return <p>N/A</p>;
          }
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "createdAt",
        header: () => "Created At",
        cell: (info) => {
          const value = info.getValue();
          if (value instanceof Date) {
            return value.toLocaleString();
          } else if (typeof value === "string") {
            return new Date(value).toLocaleString();
          }
          return <p>N/A</p>;
        },
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  return (
    <>
      <MyTable
        {...{
          data: props.data,
          columns,
        }}
      />
      <hr />
    </>
  );
}

function MyTable({
  data,
  columns,
}: {
  data: FeedbackFace[];
  columns: ColumnDef<FeedbackFace>[];
}) {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="p-2 mt-5">
      <div className="h-2" />
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-slate-400 pb-2">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="text-left bg-gray-100 p-4"
                  >
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="p-4 border-b border-gray-200">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination controls */}
      <div className="flex items-center gap-2 mt-4">
        <button
          className="border rounded p-1 bg-gray-50 cursor-pointer"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>
        <button
          className="border rounded p-1 bg-gray-50 cursor-pointer"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          className="border rounded p-1 bg-gray-50 cursor-pointer"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <button
          className="border rounded p-1 bg-gray-50 cursor-pointer"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
        <span className="flex items-center gap-1 p-1 bg-gray-50">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TableFace;
