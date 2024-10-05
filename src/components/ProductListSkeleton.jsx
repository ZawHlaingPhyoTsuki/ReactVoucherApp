import React from 'react'

const ProductListSkeleton = () => {
  return (
    <tr className="border-b dark:border-gray-700 animate-pulse">
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      </th>
      <td className="px-6 py-4 text-end">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-1"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
      </td>
      <td className="px-1 py-4 inline-flex">
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full ml-2"></div>
      </td>
    </tr>
  );
}

export default ProductListSkeleton
