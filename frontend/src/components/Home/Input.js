import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import instance from "../../axios.js";
import { useStateValue } from "../../MyContexts/StateProvider.jsx";
import UrlModal from "../UrlModal/UrlModal.js";
const Input = () => {
    const navigate = useNavigate();
    const [{ token }, dispatch] = useStateValue();
    const [longURL, setLongURL] = useState("");
    const [shortURL, setShortURL] = useState("");
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        if (token === null || token === "null" || token === undefined) {
            navigate("/LogIn");
        }
        if (longURL === "")
            return;
        e.preventDefault();
        if (longURL === "")
            return;
        console.log(longURL);
        const getShortURL = async () => {
            try {
                const response = await instance.post('/api/getShortURL', {
                    longURL: longURL
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setShortURL(response.data.shortURL);
                setShowModal(true); // Show the modal after getting the shortened link
            }
            catch (error) {
                console.log('Error', error);
                if (error.response.data.msg === "Token has expired") {
                    dispatch({
                        type: "SET_TOKEN",
                        token: null,
                    });
                    navigate("/LogIn");
                }
            }
        };
        getShortURL();
    };
    return (_jsxs(_Fragment, { children: [_jsxs("form", { className: "justify-center items-center gap-x-3 sm:flex", children: [_jsx("input", { className: "shadow border-[4px] border-gray-700 rounded-full py-4 px-3 text-lite-gray bg-dark-gray focus:shadow-outline w-[600px]", id: "username", type: "text", placeholder: "Enter your link here", value: longURL, required: true, onChange: (e) => setLongURL(e.target.value) }), _jsx("button", { onClick: (e) => handleSubmit(e), className: "bg-sky-500 h-[50px] w-[150px] hover:bg-elite-black text-white font-bold py-2 px-4 rounded-full -ml-[168px] active:bg-sky-600 duration-150", children: "Shorten Now!" })] }), showModal && _jsx(UrlModal, { shortURL: shortURL, onClose: () => {
                    setShowModal(false);
                    window.location.reload();
                } })] }));
};
export default Input;
