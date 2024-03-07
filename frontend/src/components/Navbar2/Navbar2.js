import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
{ /* @ts-ignore*/ }
import logo from "../../assets/Logo.svg";
import { useStateValue } from "../../MyContexts/StateProvider";
import instance from "../../axios";
import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
    const [{ token, premium }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch({
            type: "REMOVE_TOKEN",
            token: false,
        });
        navigate("/");
    };
    const handlePremium = () => {
        const getPremium = async () => {
            try {
                const response = await instance.post("/api/getPremium", "hello", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                dispatch({
                    type: "SET_PREMIUM",
                    token: token,
                    premium: response.data.premium,
                });
            }
            catch (error) {
                console.error("Error fetching premium data:", error);
                if (error.response.data.msg === "Token has expired") {
                    dispatch({
                        type: "SET_TOKEN",
                        token: null,
                        premium: false,
                    });
                    navigate("/LogIn");
                }
            }
        };
        getPremium();
    };
    return (_jsxs("div", { className: "sticky top-0 z-50 p-4 flex items-center justify-between backdrop-blur-md backdrop-filter", children: [_jsx("div", { className: "flex items-center", children: _jsx("img", { src: logo, alt: "Logo", onClick: () => { navigate('/'); }, className: "mr-2 h-[100px] w-[150px] hover:cursor-pointer" }) }), _jsxs("div", { className: "flex items-center", children: [token != null &&
                        token != "null" &&
                        token != undefined &&
                        token != "undefined" &&
                        (!premium || premium === "false") && (_jsx("button", { onClick: () => handlePremium(), className: "bg-gradient-to-r from-fuchsia-600 to-purple-600 h-[50px] w-fit hover:bg-orange-500 duration-150 active:bg-elite-black duration-150 text-white font-bold py-2 px-4 rounded-full mr-2", children: "Get Premium" })), _jsx("button", { onClick: () => navigate('/'), className: "bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-[50px] w-fit hover:bg-orange-500 duration-150 active:bg-elite-black duration-150 text-white font-bold py-2 px-4 rounded-full mr-2", children: "Dashboard" }), _jsx("button", { onClick: () => handleClick(), className: "bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-[50px] w-fit hover:bg-orange-500 duration-150 active:bg-elite-black duration-150 text-white font-bold py-2 px-4 rounded-full mr-2", children: "Signout" })] })] }));
};
export default Navbar2;
