{ /* @ts-ignore*/ }
import React from 'react';
export default () => {
    return (React.createElement("section", { className: "relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8" },
        React.createElement("div", { className: "w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10" }),
        React.createElement("div", { className: "max-w-xl mx-auto text-center relative" },
            React.createElement("div", { className: "py-4" },
                React.createElement("h3", { className: "text-3xl text-gray-200 font-semibold md:text-4xl" }, "Get Unlimited Access To All Our Services"),
                React.createElement("p", { className: "text-gray-300 leading-relaxed mt-3" }, "Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.")),
            React.createElement("div", { className: "mt-5 items-center justify-center gap-3 sm:flex" },
                React.createElement("a", { href: "/LogIn", className: "block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto" }, "Try It Out"),
                React.createElement("a", { href: "/SignUp", className: "block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto" }, "Get Started")))));
};
