import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
{ /* @ts-ignore*/ }
export default () => {
    const plans = [
        {
            name: "Basic",
            price: 0,
            features: [
                "Unlimited URL shortening",
                "Basic analytics (clicks, referrers)",
                "Ad-supported",
                "Increased link security",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Professional",
            price: 15,
            features: [
                "Unlimited URL shortening",
                "Advanced analytics (clicks, referrers)",
                "QR code generation",
                "Link customization",
                "Increased link security",
                "Priority support",
                "Ad-free experience",
            ],
        },
        {
            name: "Enterprise",
            price: 40,
            features: [
                "Unlimited URL shortening",
                "Comprehensive real-time analytics",
                "QR code generation",
                "Fully customizable branded links",
                "Enhanced link security and encryption",
                "Priority 24/7 support",
                "API access for integration",
            ],
        },
    ];
    return (_jsx("section", { className: 'py-14 h-full', id: "Pricing", children: _jsxs("div", { className: "max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8", children: [_jsxs("div", { className: 'relative max-w-xl mx-auto sm:text-center', children: [_jsx("h3", { className: 'text-gray-800 text-3xl font-semibold sm:text-4xl', children: "Pricing for everyone!" }), _jsx("div", { className: 'mt-3 max-w-xl', children: _jsx("p", { children: "Unleash the Power of Short Links: Shrink URLs, Maximize Engagement!" }) })] }), _jsx("div", { className: 'mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3', children: plans.map((item, idx) => (_jsxs("div", { className: 'relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2', children: [_jsxs("div", { children: [_jsx("span", { className: 'text-indigo-600 font-medium', children: item.name }), _jsxs("div", { className: 'mt-4 text-gray-800 text-3xl font-semibold', children: ["$", item.price, " ", _jsx("span", { className: "text-xl text-gray-600 font-normal", children: "/mo" })] })] }), _jsx("ul", { className: 'py-8 space-y-3', children: item.features.map((featureItem, idx) => (_jsxs("li", { className: 'flex items-center gap-5', children: [_jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-indigo-600', viewBox: '0 0 20 20', fill: 'currentColor', children: _jsx("path", { "fill-rule": 'evenodd', d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z', "clip-rule": 'evenodd' }) }), featureItem] }, idx))) }), _jsx("div", { className: "flex-1 flex items-end", children: _jsx("button", { className: 'px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700', children: "Get Started" }) })] }, idx))) })] }) }));
};
