import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const Modal = ({ show, onClose, link }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? onClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  if (!show) return (<></>);

  const [copyState, setCopyState] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopyState(true);
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
          <div className="flex justify-end">
            <button
              className="text-gray-600 hover:text-red-600"
              onClick={onClose}
            >
              <svg
                className="h-9 w-9 mb-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center">
          <div className="p-2 border rounded-lg flex items-center justify-between mt-4">
              <p className="text-sm text-gray-600 overflow-hidden">{link}</p>
              <button
                className={`relative text-gray-500 ${
                  copyState ? "text-indigo-600 pointer-events-none" : ""
                }`}
                onClick={handleCopy}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copyState ? (
                  <div className="absolute -top-12 -left-3 px-2 py-1.5 rounded-xl bg-indigo-600 font-semibold text-white text-[10px] after:absolute after:inset-x-0 after:mx-auto after:top-[22px] after:w-2 after:h-2 after:bg-indigo-600 after:rotate-45">
                    Copied
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
    </>,
    document.body
  );
};

export default Modal;
