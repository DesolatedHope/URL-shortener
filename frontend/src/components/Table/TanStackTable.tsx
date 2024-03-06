import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { USERS } from "../data";
import { useState } from "react";
import DownloadBtn from "./DownloadBtn";
import DebouncedInput from "./DebouncedInput";
import { SearchIcon } from "../Icons/Icons";
import React from "react";
import { useStateValue } from "../../MyContexts/StateProvider";

const TanStackTable = ({ data }) => {
  const columnHelper = createColumnHelper();

  const [{ tableData }, dispatch] = useStateValue();

  const handleClick = (link) => {

  } 
  
  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("longURL", {
      cell: (info) => (
        <>
          <div className="w-40 truncate">
            <a href={info.getValue()}>{info.getValue()}</a>
          </div>
        </>
      ),
      header: "Original Link",
    }),
    columnHelper.accessor("shortURL", {
      cell: (info) => (
        <>
          <img
            src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
            alt="..."
            className="w-10 h-10 object-cover justify-self-center"
            onClick={
                () => {handleClick(info.getValue())}
            }
          />
        </>
      ),
      header: "QR Code",
    }),
    columnHelper.accessor("shortURL", {
      cell: (info) => (
        <>
          <div className="w-40 truncate">{info.getValue()}</div>
        </>
      ),
      header: "Short Link",
    }),
    columnHelper.accessor("clicks", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Clicks",
    }),
    // columnHelper.accessor("email", {
    //   cell: (info) => (
    //     <>
    //       <img
    //         src={info.getValue()}
    //         alt="..."
    //         className="rounded-full w-10 h-10 object-cover"
    //       />
    //     </>
    //   ),
    //   header: "Author",
    // }),
    columnHelper.accessor("isActive", {
      cell: (info) => {
        const isActive = info.getValue();
        const rowId = info.row.original._id; // Assuming you have an _id field

        const handleStatusChange = (status) => {
          // Handle status change logic here
          console.log(`Changing status of ${rowId} to ${status}`);
        };

        const handleDelete = () => {
          // Handle delete logic here
          console.log(`Deleting ${rowId}`);
        };

        return (
          <div className="relative">
            <button
              className="text-gray-500 hover:text-gray-700"
              id={`dropdown-${rowId}`}
              data-dropdown-toggle={`dropdown-${rowId}`}
            >
              {isActive ? "Active" : "Not Active"}
            </button>
            <div
              id={`dropdown-menu-${rowId}`}
              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
            >
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button
                    onClick={() => handleStatusChange(true)}
                    className="block py-2 px-4 hover:bg-gray-100 w-full"
                  >
                    Active
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStatusChange(false)}
                    className="block py-2 px-4 hover:bg-gray-100 w-full"
                  >
                    Not Active
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDelete}
                    className="block py-2 px-4 hover:bg-gray-100 w-full"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
      },
      header: "Status",
    }),
  ];
  // const [data] = useState(() => [...USERS]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
      <div className="flex justify-between mb-2">
        <div className="w-full flex items-center gap-1">
          <SearchIcon />
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
            placeholder="Search all columns..."
          />
        </div>
        <DownloadBtn data={data} fileName={"peoples"} />
      </div>

      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-orange-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="capitalize px-3.5 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`
                  ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                  `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={12}>No Record Found!</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex items-center justify-end mt-2 gap-2">
        <button
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {">"}
        </button>

        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 bg-transparent"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-gray-400 text-elite-black"
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option
              key={pageSize}
              value={pageSize}
              className="text-elite-black"
            >
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TanStackTable;
