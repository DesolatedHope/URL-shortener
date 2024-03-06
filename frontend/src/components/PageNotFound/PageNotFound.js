{ /* @ts-ignore*/ }
import React from 'react';
const PageNotFound = () => {
    return (React.createElement("main", { className: "bg-elite-black" },
        React.createElement("div", { className: "max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8" },
            React.createElement("div", { className: "max-w-lg mx-auto space-y-3 text-center" },
                React.createElement("h3", { className: "text-orange-600 font-semibold" }, "404 Error"),
                React.createElement("p", { className: "text-white text-4xl font-semibold sm:text-5xl" }, "Page not found"),
                React.createElement("p", { className: "text-white" }, "Sorry, the page you are looking for could not be found or has been removed."),
                React.createElement("div", { className: "flex flex-wrap items-center justify-center gap-3" },
                    React.createElement("a", { href: "/", className: "block py-2 px-4 text-white font-medium bg-orange-600 duration-150 hover:bg-orange-500 active:bg-orange-700 rounded-lg" }, "Go back"))))));
};
export default PageNotFound;
