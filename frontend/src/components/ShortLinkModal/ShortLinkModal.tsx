import React, { useState } from 'react';

interface ShortLinkModalProps {
    link: string;
}

const ShortLinkModal: React.FC<ShortLinkModalProps> = ({ link }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setIsCopied(true);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Short Link Modal</h2>
                <p className="mb-4">Link: {link}</p>
                <button
                    className={`px-4 py-2 rounded-md ${isCopied ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                    onClick={handleCopy}
                >
                    {isCopied ? 'Copied!' : 'Copy Link'}
                </button>
            </div>
        </div>
    );
};

export default ShortLinkModal;