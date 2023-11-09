// src/hooks/useData.js

import { useState, useEffect } from 'react';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const items = await response.json();
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useData;
