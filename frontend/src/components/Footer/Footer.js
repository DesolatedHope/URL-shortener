import logo from '../../assets/LogoBlack.svg';
{ /* @ts-ignore*/ }
import React from 'react';
export default () => {
    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ];
    return (React.createElement("footer", { className: "pt-10" },
        React.createElement("div", { className: "max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8" },
            React.createElement("div", { className: "space-y-6 sm:max-w-md sm:mx-auto sm:text-center" },
                React.createElement("img", { src: logo, className: "sm:mx-auto" }),
                React.createElement("p", null, "Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.")),
            React.createElement("div", { className: "mt-10 py-10 border-t items-center justify-between sm:flex" },
                React.createElement("p", null, "\u00A9 2024 Shorty-URL Inc. All rights reserved."),
                React.createElement("ul", { className: "flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0" }, footerNavs.map((item, idx) => (React.createElement("li", { className: "text-gray-800 hover:text-gray-500 duration-150" },
                    React.createElement("a", { key: idx, href: item.href }, item.name)))))))));
};
