'use client';
import BookCard from '@/components/BookCard';
import ListedBookCard from '@/components/shared/ListedBookCard';
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext)

    console.log(readBooks, wishList)
    return (
        <div className='container mx-auto py-[20px]'>
            <h2 className='my-4 bg-amber-100 rounded-3xl py-8 font-bold text-4xl text-center'>Listed Books</h2>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`}/>
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">

                    {
                        readBooks.length>0? readBooks.map((book: Ibook) => {
                            return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                        }) : (<p className='text-center text-lg font-semibold'>No read Books found</p>)
                    }

                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishList.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">

                    {
                        wishList.length>0? wishList.map((book: Ibook) => {
                            return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                        }): (<p className='text-center text-lg font-semibold'>No Wishlist Books found</p>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ListedBooks;