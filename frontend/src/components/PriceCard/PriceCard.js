{ /* @ts-ignore*/ }
import React from 'react';
{ /* @ts-ignore*/ }
export const PriceCard = ({ name, description, price, features, color, btnText = 'Start Trial', }) => {
    return (React.createElement("div", { className: `flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8 ${color}` },
        React.createElement("h2", { className: "mb-5 text-xl font-medium" }, name),
        React.createElement("div", { className: "mb-5 flex items-end text-6xl font-black" }, price ? (React.createElement("div", null,
            "$",
            price)) : ('Free')),
        React.createElement("p", { className: "mb-5" }, description),
        React.createElement("ul", { className: "mb-10 flex flex-col gap-y-2" }, features.map((feature) => (React.createElement("li", { className: "flex items-center" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "25", height: "25", viewBox: "0 0 64 64" },
                React.createElement("path", { fill: "#060000", d: "M32,10c12.131,0,22,9.869,22,22s-9.869,22-22,22s-22-9.869-22-22S19.869,10,32,10z M42.362,28.878\tc0.781-0.781,0.781-2.047,0-2.828c-0.781-0.781-2.047-0.781-2.828,0l-9.121,9.121l-5.103-5.103c-0.781-0.781-2.047-0.781-2.828,0\tc-0.781,0.781-0.781,2.047,0,2.828l6.517,6.517C29.374,39.789,29.883,40,30.413,40s1.039-0.211,1.414-0.586L42.362,28.878z" })),
            feature)))),
        React.createElement("button", { className: "mt-auto rounded-full bg-elite-black py-3 px-6 text-lg font-medium text-lite-gray" }, btnText)));
};
