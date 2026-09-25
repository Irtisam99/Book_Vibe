'use client';
import BookCard from '@/components/BookCard';
import ListedBookCard from '@/components/shared/ListedBookCard';
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext)
    
    // State

    const [sortBy,setSortBy]=useState<"rating"|"pages"|"year"|"Sort By">("Sort By")

    const sortBooks=(books:Ibook[])=>{
        const sortedBooks=[...books]

        if(sortBy==='rating'){
            sortedBooks.sort((a,b)=>b.rating-a.rating)
        }else if(sortBy==='pages'){
            sortedBooks.sort((a,b)=>b.totalPages-a.totalPages)
        }else if(sortBy==='year'){
            sortedBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
        }

        return sortedBooks
    }

    const sortedReadBooks=sortBooks(readBooks)
    const sortedWhishlist=sortBooks(wishList)
    return (
        <div className='container mx-auto py-[20px]'>
            <h2 className='my-4 bg-amber-100 rounded-3xl py-8 font-bold text-4xl text-center'>Listed Books</h2>
            <div className='text-center mt-10 mb-12'>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value as 'rating'|'pages'|'year')} defaultValue="Sort By" className="select select-success">
                    <option disabled={true}>Sort By</option>
                    <option value={'rating'}>Rating</option>
                    <option value={'pages'}>Number of Pages</option>
                    <option value={'year'}>Published Years</option>
                </select>
            </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">

                    {
                        sortedReadBooks.length > 0 ? sortedReadBooks.map((book: Ibook) => {
                            return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                        }) : (<p className='text-center text-lg font-semibold'>No read Books found</p>)
                    }

                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishList.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">

                    {
                        sortedWhishlist.length > 0 ? sortedWhishlist.map((book: Ibook) => {
                            return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                        }) : (<p className='text-center text-lg font-semibold'>No Wishlist Books found</p>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ListedBooks;