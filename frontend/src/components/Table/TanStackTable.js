import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable, } from "@tanstack/react-table";
{ /* @ts-ignore*/ }
import { useState } from "react";
import DownloadBtn from "./DownloadBtn";
import DebouncedInput from "./DebouncedInput";
import { SearchIcon } from "../Icons/Icons";
import { useStateValue } from "../../MyContexts/StateProvider";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
const TanStackTable = ({ data }) => {
    { /* @ts-ignore*/ }
    const [copyState, setCopyState] = useState(false);
    let [copyItem, setCopyItem] = useState({});
    const handleItemCopy = (url, idx) => {
        navigator.clipboard.writeText(url).then(function () {
            setCopyItem({ ...copyItem, [idx]: true });
            setTimeout(() => {
                setCopyItem({ ...copyItem, [idx]: false });
            }, 3000);
        }, function (err) {
            console.error("Async: Could not copy text: ", err);
        });
    };
    { /* @ts-ignore*/ }
    const navigate = useNavigate();
    const columnHelper = createColumnHelper();
    { /* @ts-ignore*/ }
    const [{ premium }, dispatch] = useStateValue();
    const [showModal, setShowModal] = useState(false);
    const [url, setUrl] = useState("");
    const handleRedirect = (link) => {
        if (link.startsWith("http://") || link.startsWith("https://")) {
            window.open(link, "_blank");
        }
        else {
            link = "http://" + link;
            window.open(link, "_blank");
        }
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleOpenModal = (urlValue) => {
        setUrl(urlValue);
        setShowModal(true);
    };
    let columns = [];
    if (!(!premium || premium === 'false')) {
        columns = [
            columnHelper.accessor("", {
                id: "S.No",
                cell: (info) => _jsx("span", { children: info.row.index + 1 }),
                header: "S.No",
            }),
            columnHelper.accessor("longURL", {
                cell: (info) => (_jsx(_Fragment, { children: _jsx("div", { className: "w-40 truncate", children: _jsx("a", { href: info.getValue(), children: info.getValue() }) }) })),
                header: "Original Link",
            }),
            columnHelper.accessor("shortURL", {
                cell: (info) => (_jsxs(_Fragment, { children: [_jsx("img", { src: "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg", alt: "...", className: "w-10 h-10 object-cover justify-self-center hover:cursor-pointer", onClick: () => handleOpenModal(info.getValue()) }), _jsx(Modal, { show: showModal, onClose: handleCloseModal, value: url })] })),
                header: "QR Code",
            }),
            columnHelper.accessor("shortURL", {
                cell: (info) => (_jsx(_Fragment, { children: _jsx("button", { onClick: () => {
                            { /* @ts-ignore*/ }
                            handleRedirect(info.getValue());
                        }, children: info.getValue() }) })),
                header: "Short Link",
            }),
            columnHelper.accessor("shortURL", {
                cell: (info) => (_jsxs("button", { className: `relative text-gray-500 ${copyItem[info.row.id] ? "text-indigo-600 pointer-events-none" : ""}`, onClick: handleItemCopy.bind(this, info.getValue(), info.row.index), children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 pointer-events-none", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) }), copyItem[info.row.id] ? (_jsx("div", { className: "absolute -top-12 -left-3 px-2 py-1.5 rounded-xl bg-indigo-600 font-semibold text-white text-[10px] after:absolute after:inset-x-0 after:mx-auto after:top-[22px] after:w-2 after:h-2 after:bg-indigo-600 after:rotate-45", children: "Copied" })) : ("")] })),
                header: "Copy",
            }),
            /* @ts-ignore*/
            columnHelper.accessor("clicks", {
                /* @ts-ignore*/
                cell: (info) => _jsx("span", { children: info.getValue() }),
                header: "Clicks",
            }),
            // columnHelper.accessor("isActive", {
            //   cell: (info) => {
            //     const isActive = info.getValue();
            //     const rowId = info.row.id;
            //     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            //     const toggleDropdown = () => {
            //       setIsDropdownOpen(!isDropdownOpen);
            //     };
            //     const handleStatusChange = (status) => {
            //       // Handle status change logic here
            //       console.log(`Changing status of ${rowId} to ${status}`);
            //       setIsDropdownOpen(false); // Close the dropdown after changing the status
            //     };
            //     const handleDelete = () => {
            //       // Handle delete logic here
            //       console.log(`Deleting ${rowId}`);
            //       setIsDropdownOpen(false); // Close the dropdown after deleting
            //     };
            //     return (
            //       <div className="relative">
            //         <button
            //           className={isActive ? "text-green-600" : "text-red-600"}
            //           id={`dropdown-${rowId}`}
            //           onClick={toggleDropdown}
            //         >
            //           {isActive ? "Active" : "Inactive"}
            //         </button>
            //         {isDropdownOpen && (
            //           <div
            //             id={`dropdown-menu-${rowId}`}
            //             className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
            //           >
            //             <ul className="py-1 text-sm text-gray-700">
            //               <li>
            //                 <button
            //                   onClick={() => handleStatusChange(true)}
            //                   className="block py-2 px-4 hover:bg-gray-100 w-full"
            //                 >
            //                   Active
            //                 </button>
            //               </li>
            //               <li>
            //                 <button
            //                   onClick={() => handleStatusChange(false)}
            //                   className="block py-2 px-4 hover:bg-gray-100 w-full"
            //                 >
            //                   Not Active
            //                 </button>
            //               </li>
            //               <li>
            //                 <button
            //                   onClick={handleDelete}
            //                   className="block py-2 px-4 hover:bg-gray-100 w-full"
            //                 >
            //                   Delete
            //                 </button>
            //               </li>
            //             </ul>
            //           </div>
            //         )}
            //       </div>
            //     );
            //   },
            //   header: "Status",
            // }),
        ];
    }
    else {
        columns = [
            columnHelper.accessor("", {
                id: "S.No",
                cell: (info) => _jsx("span", { children: info.row.index + 1 }),
                header: "S.No",
            }),
            columnHelper.accessor("longURL", {
                cell: (info) => (_jsx(_Fragment, { children: _jsx("div", { className: "w-40 truncate", children: _jsx("a", { href: info.getValue(), children: info.getValue() }) }) })),
                header: "Original Link",
            }),
            columnHelper.accessor("shortURL", {
                cell: (info) => (_jsx(_Fragment, { children: _jsx("button", { onClick: () => {
                            handleRedirect(info.getValue());
                        }, children: info.getValue() }) })),
                header: "Short Link",
            }),
            columnHelper.accessor("shortURL", {
                cell: (info) => (_jsxs("button", { className: `relative text-gray-500 ${copyItem[info.row.id] ? "text-indigo-600 pointer-events-none" : ""}`, onClick: handleItemCopy.bind(this, info.getValue(), info.row.index), children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 pointer-events-none", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) }), copyItem[info.row.id] ? (_jsx("div", { className: "absolute -top-12 -left-3 px-2 py-1.5 rounded-xl bg-indigo-600 font-semibold text-white text-[10px] after:absolute after:inset-x-0 after:mx-auto after:top-[22px] after:w-2 after:h-2 after:bg-indigo-600 after:rotate-45", children: "Copied" })) : ("")] })),
                header: "Copy",
            }),
            columnHelper.accessor("clicks", {
                /* @ts-ignore*/
                cell: (info) => _jsx("span", { children: info.getValue() }),
                header: "Clicks",
            }),
            // columnHelper.accessor("isActive", {
            //   cell: (info) => {
            //     const isActive = info.getValue();
            //     const rowId = info.row.id;
            //     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            //     const toggleDropdown = () => {
            //       setIsDropdownOpen(!isDropdownOpen);
            //     };
            //     const handleStatusChange = (status) => {
            //       // Handle status change logic here
            //       console.log(`Changing status of ${rowId} to ${status}`);
            //       setIsDropdownOpen(false); // Close the dropdown after changing the status
            //     };
            //     const handleDelete = () => {
            //       // Handle delete logic here
            //       console.log(`Deleting ${rowId}`);
            //       setIsDropdownOpen(false); // Close the dropdown after deleting
            //     };
            //     return (
            //       <div className="relative">
            //         <button
            //           className={isActive ? "text-green-600" : "text-red-600"}
            //           id={`dropdown-${rowId}`}
            //           onClick={toggleDropdown}
            //         >
            //           {isActive ? "Active" : "Inactive"}
            //         </button>
            //         {isDropdownOpen && (
            //           <div
            //             id={`dropdown-menu-${rowId}`}
            //             className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
            //           >
            //             <ul className="py-1 text-sm text-gray-700">
            //               <li>
            //                 <button
            //                   onClick={() => handleStatusChange(true)}
            //                   className="block py-2 px-4 hover:bg-gray-100 w-full"
            //                 >
            //                   Active
            //                 </button>
            //               </li>
            //               <li>
            //                 <button
            //                   onClick={() => handleStatusChange(false)}
            //                   className="block py-2 px-4 hover:bg-gray-100 w-full"
            //                 >
            //                   Not Active
            //                 </button>
            //               </li>
            //               <li>
            //                 <button
            //                   onClick={handleDelete}
            //                   className="block py-2 px-4 hover:bg-gray-100 w-full"
            //                 >
            //                   Delete
            //                 </button>
            //               </li>
            //             </ul>
            //           </div>
            //         )}
            //       </div>
            //     );
            //   },
            //   header: "Status",
            // }),
        ];
    }
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
    return (_jsxs("div", { className: "p-2 max-w-5xl mx-auto text-white fill-gray-400", children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsxs("div", { className: "w-full flex items-center gap-1", children: [_jsx(SearchIcon, {}), _jsx(DebouncedInput, { value: globalFilter ?? "", onChange: (value) => setGlobalFilter(String(value)), className: "p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500", placeholder: "Search all columns..." })] }), _jsx(DownloadBtn, { data: data, fileName: "peoples" })] }), _jsxs("table", { className: "border border-gray-700 w-full text-left", children: [_jsx("thead", { className: "bg-orange-500", children: table.getHeaderGroups().map((headerGroup) => (_jsx("tr", { children: headerGroup.headers.map((header) => (_jsx("th", { className: "capitalize px-3.5 py-2", children: flexRender(header.column.columnDef.header, header.getContext()) }, header.id))) }, headerGroup.id))) }), _jsx("tbody", { children: table.getRowModel().rows.length ? (table.getRowModel().rows.map((row, i) => (_jsx("tr", { className: `
                  ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                  `, children: row.getVisibleCells().map((cell) => (_jsx("td", { className: "px-3.5 py-2", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : (_jsx("tr", { className: "text-center h-32", children: _jsx("td", { colSpan: 12, children: "No Record Found!" }) })) })] }), _jsxs("div", { className: "flex items-center justify-end mt-2 gap-2", children: [_jsx("button", { onClick: () => {
                            table.previousPage();
                        }, disabled: !table.getCanPreviousPage(), className: "p-1 border border-gray-300 px-2 disabled:opacity-30", children: "<" }), _jsx("button", { onClick: () => {
                            table.nextPage();
                        }, disabled: !table.getCanNextPage(), className: "p-1 border border-gray-300 px-2 disabled:opacity-30", children: ">" }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx("div", { children: "Page" }), _jsxs("strong", { children: [table.getState().pagination.pageIndex + 1, " of", " ", table.getPageCount()] })] }), _jsxs("span", { className: "flex items-center gap-1", children: ["| Go to page:", _jsx("input", { type: "number", defaultValue: table.getState().pagination.pageIndex + 1, onChange: (e) => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                    table.setPageIndex(page);
                                }, className: "border p-1 rounded w-16 bg-transparent" })] }), _jsx("select", { value: table.getState().pagination.pageSize, onChange: (e) => {
                            table.setPageSize(Number(e.target.value));
                        }, className: "p-2 bg-gray-400 text-elite-black", children: [10, 20, 30, 50].map((pageSize) => (_jsxs("option", { value: pageSize, className: "text-elite-black", children: ["Show ", pageSize] }, pageSize))) })] })] }));
};
export default TanStackTable;
