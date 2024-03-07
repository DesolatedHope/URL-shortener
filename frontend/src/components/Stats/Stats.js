import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
{ /* @ts-ignore*/ }
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
    return (_jsxs("section", { className: "py-16", children: [_jsxs("div", { className: "relative z-10 max-w-screen-xl mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "max-w-2xl xl:mx-auto xl:text-center", children: [_jsx("h3", { className: "text-white text-3xl font-semibold sm:text-4xl", children: "Our customers are always happy" }), _jsx("p", { className: "mt-3 text-gray-300", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt." })] }), _jsx("div", { className: "mt-12", children: _jsx("ul", { className: "flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center", children: stats.map((item, idx) => (_jsxs("li", { className: "sm:max-w-[15rem]", children: [_jsx("h4", { className: "text-4xl text-white font-semibold", children: item.data }), _jsx("p", { className: "mt-3 text-gray-400 font-medium", children: item.desc })] }, idx))) }) })] }), _jsx("div", { className: "absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72", style: { background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" } })] }));
};
