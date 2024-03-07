import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
{ /* @ts-ignore*/ }
import Navbar2 from "../Navbar2/Navbar2";
import { useState, useEffect } from "react";
import { useStateValue } from "../../MyContexts/StateProvider";
import instance from "../../axios";
const Analytics = () => {
    const [data, setData] = useState([]);
    { /* @ts-ignore*/ }
    const [{ token }, dispatch] = useStateValue();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await instance.get("/api/getAnalytics", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                // console.log(response.data.analytics);
                setData(response.data);
            }
            catch (error) {
                console.error("Error fetching analytics data:", error);
            }
        };
        getData();
    }, [token]);
    return (_jsxs("div", { className: "bg-elite-black text-white min-h-screen", children: [_jsx(Navbar2, {}), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h2", { className: "text-center text-5xl font-bold mb-12", children: "Analytics" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4", children: [_jsxs("div", { className: "bg-blue-500 = text-white rounded-lg p-6 h-[250px]", children: [_jsx("h3", { className: "text-6xl text-center font-bold mb-2", children: data?.websites }), _jsx("p", { className: "text-3xl text-center p-5", children: "Total Url Shortened" })] }), _jsxs("div", { className: "bg-yellow-500 text-white rounded-lg p-6", children: [_jsx("h3", { className: "text-6xl text-center font-bold mb-2", children: data?.clicks }), _jsx("p", { className: "text-3xl text-center p-5", children: "Total Clicks" })] }), _jsxs("div", { className: "bg-green-500 text-white rounded-lg p-6", children: [_jsx("h3", { className: "text-6xl text-center font-bold mb-2", children: data?.active }), _jsx("p", { className: "text-3xl text-center p-5", children: "Active Links" })] }), _jsxs("div", { className: "bg-red-500 text-white rounded-lg p-6", children: [_jsx("h3", { className: "text-6xl text-center font-bold mb-2", children: data?.active }), _jsx("p", { className: "text-3xl text-center p-5", children: "Inactive Links" })] })] })] })] }));
};
export default Analytics;
