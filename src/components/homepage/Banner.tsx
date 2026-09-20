import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="container mx-auto overflow-hidden rounded-[32px] bg-[#F5F7F6]">
                <div className="grid items-center lg:grid-cols-2">

                    {/* Content */}
                    <div className="px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
                        <span className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
                            Discover your next favorite book
                        </span>

                        <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Books to
                            <span className="text-green-600"> freshen up </span>
                            your bookshelf
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                            Explore inspiring stories, timeless classics, and
                            exciting new reads curated for every kind of reader.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <button className="rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl">
                                View the Task
                            </button>

                            <button className="rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50">
                                Explore Books
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-full min-h-[320px] p-4 sm:min-h-[400px] lg:min-h-[520px]">
                        <div className="relative h-full min-h-[320px] overflow-hidden rounded-[24px] sm:min-h-[400px] lg:min-h-[488px]">
                            <Image
                                src={bannerImg}
                                alt="Books arranged on a bookshelf"
                                fill
                                priority
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />

                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                            {/* Floating badge */}
                            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                                <p className="text-xs font-medium text-gray-500">
                                    Curated for readers
                                </p>
                                <p className="mt-1 text-lg font-bold text-gray-900">
                                    Read. Discover. Enjoy.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;