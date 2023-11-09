import Categories from '@/app/Components/Categories/Categories'
import React from 'react'

const Duas = ({ products }) => {
    return (
      <div className="lg:flex">
            <div className="lg:w-64 bg-blue-200 p-4">
                <Categories />
            </div>
            <div className="flex-1 bg-green-200 p-4">Main Content (Variable Width)</div>
            <div className="lg:w-48 bg-red-200 p-4">Right Column (300px)</div>
        </div>
        
    )
};

export async function getStaticProps() {
    // Fetch data from the API
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
  
    return {
      props: {
        products,
      },
    };
  }

export default Duas