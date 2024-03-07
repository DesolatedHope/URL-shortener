import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Navbar, WelcomePage } from "../index";
import { TanStackTable } from '../index';
import Input from './Input';
import { useStateValue } from '../../MyContexts/StateProvider';
// @ts-ignore
import { useState, useEffect } from 'react';
import instance from '../../axios';
const Home = () => {
    { /* @ts-ignore*/ }
    const [{ token }, dispatch] = useStateValue();
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (token != null && token != "null" && token != undefined && token != 'undefined') {
            const getTableData = async () => {
                const response = await instance.get('/api/getTableData', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                try {
                    setTableData(response.data.dataTable.reverse());
                }
                catch (error) {
                    console.error("Error fetching table data:", error);
                }
            };
            getTableData();
        }
    }, [token]);
    useEffect(() => {
        console.log("tableData", tableData);
    }, [tableData]);
    if (token != null && token != "null" && token != undefined && token != 'undefined') {
        return (_jsx(_Fragment, { children: _jsxs("div", { className: "pt-4 min-h-screen bg-elite-black", children: [_jsx(Navbar, {}), _jsx(Input, {}), _jsx(TanStackTable, { data: tableData })] }) }));
    }
    else {
        return (_jsx(_Fragment, { children: _jsx(WelcomePage, {}) }));
    }
};
export default Home;
