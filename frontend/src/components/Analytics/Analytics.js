{ /* @ts-ignore*/ }
import React from "react";
import Navbar from "../Navbar/Navbar";
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
    return (React.createElement("div", { className: "bg-elite-black text-white min-h-screen" },
        React.createElement(Navbar, null),
        React.createElement("div", { className: "container mx-auto px-4 py-8" },
            React.createElement("h2", { className: "text-center text-5xl font-bold mb-12" }, "Analytics"),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" },
                React.createElement("div", { className: "bg-blue-500 = text-white rounded-lg p-6 h-[250px]" },
                    React.createElement("h3", { className: "text-6xl text-center font-bold mb-2" }, data?.websites),
                    React.createElement("p", { className: "text-3xl text-center p-5" }, "Total Url Shortened")),
                React.createElement("div", { className: "bg-yellow-500 text-white rounded-lg p-6" },
                    React.createElement("h3", { className: "text-6xl text-center font-bold mb-2" }, data?.clicks),
                    React.createElement("p", { className: "text-3xl text-center p-5" }, "Total Clicks")),
                React.createElement("div", { className: "bg-green-500 text-white rounded-lg p-6" },
                    React.createElement("h3", { className: "text-6xl text-center font-bold mb-2" }, data?.active),
                    React.createElement("p", { className: "text-3xl text-center p-5" }, "Active Links")),
                React.createElement("div", { className: "bg-red-500 text-white rounded-lg p-6" },
                    React.createElement("h3", { className: "text-6xl text-center font-bold mb-2" }, data?.active),
                    React.createElement("p", { className: "text-3xl text-center p-5" }, "Inactive Links"))))));
};
export default Analytics;
