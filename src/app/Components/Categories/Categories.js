import React from 'react';
import './Categories.css';
import CategoriesMenus from './CategoriesMenus/CategoriesMenus';

const Categories = ({duas}) => {
    return (
        <div className="flex min-h-screen flex-col gap-2.5">
            <h3 className="p-5 bg-green-500 text-center rounded-md text-white">Categories</h3>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search by Categories"
                    className="pl-10 max-w-full w-full py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 17a8 8 0 100-16 8 8 0 000 16z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M23 23l-6-6"
                        />
                    </svg>
                </div>
            </div>
            <CategoriesMenus duas={duas}/>
        </div>
    )
}

export default Categories