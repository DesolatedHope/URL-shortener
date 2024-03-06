{ /* @ts-ignore*/ }
import React from 'react';
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
    return (React.createElement("section", { className: 'py-14 h-full', id: "Pricing" },
        React.createElement("div", { className: "max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8" },
            React.createElement("div", { className: 'relative max-w-xl mx-auto sm:text-center' },
                React.createElement("h3", { className: 'text-gray-800 text-3xl font-semibold sm:text-4xl' }, "Pricing for everyone!"),
                React.createElement("div", { className: 'mt-3 max-w-xl' },
                    React.createElement("p", null, "Unleash the Power of Short Links: Shrink URLs, Maximize Engagement!"))),
            React.createElement("div", { className: 'mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3' }, plans.map((item, idx) => (React.createElement("div", { key: idx, className: 'relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2' },
                React.createElement("div", null,
                    React.createElement("span", { className: 'text-indigo-600 font-medium' }, item.name),
                    React.createElement("div", { className: 'mt-4 text-gray-800 text-3xl font-semibold' },
                        "$",
                        item.price,
                        " ",
                        React.createElement("span", { className: "text-xl text-gray-600 font-normal" }, "/mo"))),
                React.createElement("ul", { className: 'py-8 space-y-3' }, item.features.map((featureItem, idx) => (React.createElement("li", { key: idx, className: 'flex items-center gap-5' },
                    React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-indigo-600', viewBox: '0 0 20 20', fill: 'currentColor' },
                        React.createElement("path", { "fill-rule": 'evenodd', d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z', "clip-rule": 'evenodd' })),
                    featureItem)))),
                React.createElement("div", { className: "flex-1 flex items-end" },
                    React.createElement("button", { className: 'px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700' }, "Get Started")))))))));
};
