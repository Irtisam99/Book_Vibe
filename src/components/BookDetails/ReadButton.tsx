'use client';
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}:{book:Ibook}) => {
    const {readBooks,setReadBooks}=useContext(BooksContext)

    const handleReadBook=()=>{
        setReadBooks([...readBooks,book])
        toast.success(`You have Read "${book.bookName}`)
    }

    return (
        <button className="rounded-xl border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-100" onClick={()=>handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;