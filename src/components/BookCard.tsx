import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

const BookCard = ({book}:{book:Ibook}) => {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">


            {/* Image Section */}
            <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-100 p-6 sm:h-84">
                
                {/* Background decoration */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-100/60 transition-transform duration-500 group-hover:scale-150" />

                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-md">
                    {book.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-md">
                    <span className="text-yellow-500">★</span>
                    {book.rating}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Title & Author */}
                <div>
                    <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
                        {book.bookName}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        by <span className="font-medium text-gray-700">{book.author}</span>
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-gray-50 p-3">
                    <div>
                        <p className="text-xs text-gray-400">Pages</p>
                        <p className="mt-1 text-sm font-semibold text-gray-800">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Published</p>
                        <p className="mt-1 text-sm font-semibold text-gray-800">
                            {book.yearOfPublishing}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-5">
                    <button className="btn w-full rounded-full border-0 bg-gray-900 text-white transition-all duration-300 hover:bg-green-600">
                        View Details
                        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookCard;