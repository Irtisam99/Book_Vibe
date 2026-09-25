'use client';
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: Ibook }) => {
    const { wishList, setWishList } = useContext(BooksContext)

    const handleWishList = () => {
        setWishList([...wishList, book])
        toast.success(`You have Added to WishList : "${book.bookName}`)
    }

    return (
        <button className="rounded-xl bg-[#55B4D1] px-8 py-3 font-semibold text-white transition hover:bg-[#42A5C3]" onClick={handleWishList}>
           Add to Wishlist
        </button>
    );
};

export default WishListButton;