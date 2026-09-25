import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBookCard = ({ book }: {book:Ibook}) => {
    return (
        <div className="group flex w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-64 w-48 shrink-0 overflow-hidden bg-gray-100 sm:h-72 sm:w-52">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="208px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-md">
                    {book.category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">

                <div>
                    {/* Rating */}
                    <div className="mb-3 flex items-center gap-1 text-sm font-semibold text-gray-700">
                        <span className="text-yellow-500">★</span>
                        {book.rating}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-green-600 sm:text-3xl">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-2 text-sm text-gray-500">
                        By{' '}
                        <span className="font-medium text-gray-700">
                            {book.author}
                        </span>
                    </p>

                    {/* Review */}
                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600 sm:text-base">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Book information */}
                    <div className="flex gap-6 text-sm">
                        <div>
                            <p className="text-xs text-gray-400">Pages</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Published</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <Link
                        href={`/books/${book.bookId}`}
                        className="rounded-full bg-gray-900 px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600"
                    >
                        View Details
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;