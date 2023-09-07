'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Input() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = () => {

  };
  return (
    <form className="flex space-x-2">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleSearchChange}
      />
      {/* <button>Search</button> */}
      <Link href={`/items?search=${search}`}>Search</Link>
    </form>
  );
}
