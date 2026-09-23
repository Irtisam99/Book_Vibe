'use client';
import React from 'react';

const ReadButton = () => {
    const handleReadBook=()=>{
        
    }

    return (
        <button className="rounded-xl border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-100" onClick={()=>handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;