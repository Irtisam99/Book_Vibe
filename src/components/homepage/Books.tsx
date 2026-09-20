import React from 'react';
import BookCard from '../BookCard';
import { Ibook } from '@/types/books.type';


const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json')
    const data = await response.json()
    return data
}

const Books = async () => {
    const booksData = await getBooks()
    return (
        <>
            (
            {/* Section Heading */}
            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-600">
                    Explore Our Collection
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Discover Your Next Favorite Book
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                    Browse through our collection of amazing books and find
                    something worth adding to your bookshelf.
                </p>
            </div>

            <section className='container mx-auto my-[70px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>

                {
                    booksData.map((book:Ibook) => {
                        return <BookCard key={book.bookId} book={book}></BookCard>
                    })
                }
            </section>
            )
        </>

    );
};

export default Books;