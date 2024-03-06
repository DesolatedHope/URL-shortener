import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

const Modal = ({ show, onClose, value }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center">
          <QRCode value={value} />
        </div>
      </div>
      {/* <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-md backdrop-filter"></div> */}
    </div>,
    document.body
  );
};

export default Modal;