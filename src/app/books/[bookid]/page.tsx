import ReadButton from '@/components/BookDetails/ReadButton';
import WishListButton from '@/components/BookDetails/WishListButton';
import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json')
    const data = await response.json()
    return data
}

const BookDetailsPage = async ({ params }: { params: Promise<{ bookid: string }> }) => {
    const { bookid } = await params
    const booksData = await getBooks()

    const book = booksData.find((book: Ibook) => {
        return book.bookId === parseInt(bookid)
    })as Ibook
    return (
        <section className="min-h-screen bg-white py-10 sm:py-14 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">

                    <div className="flex min-h-[450px] items-center justify-center overflow-hidden rounded-3xl bg-[#F3F3F3] p-8 sm:min-h-[550px] lg:min-h-[750px] lg:p-12">

                        <div className="relative h-[400px] w-full max-w-[350px] sm:h-[480px] sm:max-w-[380px] lg:h-[580px] lg:max-w-[1930px] [perspective:1200px]">
                            <div className="relative h-full w-full transition-transform duration-500 [transform:rotateY(-20deg)_rotateX(2deg)] hover:[transform:rotateY(-5deg)_rotateX(1deg)]">
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    fill
                                    sizes="(max-width: 1024px) 90vw, 45vw"
                                    className="object-contain drop-shadow-[20px_25px_25px_rgba(0,0,0,0.25)]"
                                    priority
                                />
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col">

                        <h1 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            {book.bookName}
                        </h1>

                        <p className="mt-5 text-lg text-gray-600">
                            By : <span className="font-medium">{book.author}</span>
                        </p>


                        <div className="mt-8 border-y border-gray-200 py-5">
                            <span className="text-lg font-medium text-gray-800">
                                {book.category}
                            </span>
                        </div>


                        <div className="mt-7">
                            <p className="text-base leading-7 text-gray-600">
                                <span className="font-bold text-gray-900">
                                    Review:
                                </span>{' '}
                                {book.review}
                            </p>
                        </div>


                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <span className="mr-2 font-bold text-gray-900">
                                Tag
                            </span>

                            {book.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>


                        <div className="my-7 border-t border-gray-200" />


                        <div className="space-y-4">

                            <div className="grid grid-cols-[140px_1fr] gap-4 text-sm sm:grid-cols-[170px_1fr] sm:text-base">
                                <span className="text-gray-500">
                                    Number of Pages:
                                </span>

                                <span className="font-semibold text-gray-900">
                                    {book.totalPages}
                                </span>
                            </div>

                            <div className="grid grid-cols-[140px_1fr] gap-4 text-sm sm:grid-cols-[170px_1fr] sm:text-base">
                                <span className="text-gray-500">
                                    Publisher:
                                </span>

                                <span className="font-semibold text-gray-900">
                                    {book.publisher}
                                </span>
                            </div>

                            <div className="grid grid-cols-[140px_1fr] gap-4 text-sm sm:grid-cols-[170px_1fr] sm:text-base">
                                <span className="text-gray-500">
                                    Year of Publishing:
                                </span>

                                <span className="font-semibold text-gray-900">
                                    {book.yearOfPublishing}
                                </span>
                            </div>

                            <div className="grid grid-cols-[140px_1fr] gap-4 text-sm sm:grid-cols-[170px_1fr] sm:text-base">
                                <span className="text-gray-500">
                                    Rating:
                                </span>

                                <span className="font-semibold text-gray-900">
                                    {book.rating}
                                </span>
                            </div>

                        </div>


                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            
                            <ReadButton book={book}></ReadButton>

                            <WishListButton book={book}></WishListButton>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookDetailsPage;