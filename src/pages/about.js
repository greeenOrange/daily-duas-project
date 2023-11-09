import React from 'react';

const AboutPage = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a simple about page in Next.js.</p>
    </div>
  );
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

export default AboutPage;