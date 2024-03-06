{ /* @ts-ignore*/ }
import React from 'react';
import * as Dialog from "@radix-ui/react-dialog";
export default () => {
    return (React.createElement(Dialog.Root, null,
        React.createElement(Dialog.Trigger, { className: "w-32 mx-auto py-2 ml-2 shadow-sm rounded-md bg-indigo-600 text-white mt-4 flex items-center justify-center" }, "Click me"),
        React.createElement(Dialog.Portal, null,
            React.createElement(Dialog.Overlay, { className: "fixed inset-0 w-full h-full bg-black opacity-40" }),
            React.createElement(Dialog.Content, { className: "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4" },
                React.createElement("div", { className: "bg-white rounded-md shadow-lg" },
                    React.createElement("div", { className: "flex items-center justify-between p-4 border-b" },
                        React.createElement(Dialog.Close, { className: "p-2 text-gray-400 rounded-md hover:bg-gray-100" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5 mx-auto", viewBox: "0 0 20 20", fill: "currentColor" },
                                React.createElement("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" })))),
                    React.createElement("div", { className: "flex items-center gap-3 p-4 border-t" },
                        React.createElement(Dialog.Close, { asChild: true },
                            React.createElement("button", { className: "px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2 " }, "Accept")),
                        React.createElement(Dialog.Close, { asChild: true },
                            React.createElement("button", { className: "px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2", "aria-label": "Close" }, "Cancel"))))))));
};
