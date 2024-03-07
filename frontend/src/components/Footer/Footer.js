import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logo from '../../assets/LogoBlack.svg';
{ /* @ts-ignore*/ }
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
    return (_jsx("footer", { className: "pt-10", children: _jsxs("div", { className: "max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8", children: [_jsxs("div", { className: "space-y-6 sm:max-w-md sm:mx-auto sm:text-center", children: [_jsx("img", { src: logo, className: "sm:mx-auto" }), _jsx("p", { children: "Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur." })] }), _jsxs("div", { className: "mt-10 py-10 border-t items-center justify-between sm:flex", children: [_jsx("p", { children: "\u00A9 2024 Shorty-URL Inc. All rights reserved." }), _jsx("ul", { className: "flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0", children: footerNavs.map((item, idx) => (_jsx("li", { className: "text-gray-800 hover:text-gray-500 duration-150", children: _jsx("a", { href: item.href, children: item.name }, idx) }))) })] })] }) }));
};
