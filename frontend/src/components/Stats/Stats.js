{ /* @ts-ignore*/ }
import React from 'react';
export default () => {
    const stats = [
        {
            data: "45K",
            desc: "Customers consectetur adipiscing elit."
        },
        {
            data: "100K+",
            desc: "Downloads efficitur id eu nulla facilisis turpis"
        },
        {
            data: "20+",
            desc: "Countries maximus sit amet auctor sed,"
        },
        {
            data: "30M+",
            desc: "Total clicks consectetur adipiscing elit"
        },
    ];
    return (React.createElement("section", { className: "py-16" },
        React.createElement("div", { className: "relative z-10 max-w-screen-xl mx-auto px-4 md:px-8" },
            React.createElement("div", { className: "max-w-2xl xl:mx-auto xl:text-center" },
                React.createElement("h3", { className: "text-white text-3xl font-semibold sm:text-4xl" }, "Our customers are always happy"),
                React.createElement("p", { className: "mt-3 text-gray-300" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.")),
            React.createElement("div", { className: "mt-12" },
                React.createElement("ul", { className: "flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center" }, stats.map((item, idx) => (React.createElement("li", { key: idx, className: "sm:max-w-[15rem]" },
                    React.createElement("h4", { className: "text-4xl text-white font-semibold" }, item.data),
                    React.createElement("p", { className: "mt-3 text-gray-400 font-medium" }, item.desc))))))),
        React.createElement("div", { className: "absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72", style: { background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" } })));
};
