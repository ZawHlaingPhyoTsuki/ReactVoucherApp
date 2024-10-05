import React from "react";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiSearch,
} from "react-icons/hi";
import useSWR, { mutate } from "swr";
import ProductListSkeleton from "./ProductListSkeleton";

const fetcher = (url) => fetch(url).then((res) => res.json());


const ProductList = () => {
  // console.log(import.meta.env.VITE_API_URL);

  const { data, isValidating, isLoading, error } = useSWR(
    import.meta.env.Vite_API_URL,
    fetcher
  );
  const handleRefresh = () => {
    // Set the cached data to undefined to force isLoading to be true
    mutate(import.meta.env.VITE_API_URL, undefined, false);
  };

  // console.log(isLoading)

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <HiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Products"
          />
        </div>
        <div className="relative mb-6">
          <button className="text-white flex items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add new product
            <HiPlus className="size-5" />
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductListSkeleton />
            ) : (
              <>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row ">
                  <td colSpan={5} className="px-6 py-4 text-center">
                    There is no product
                  </td>
                </tr>
                <tr className=" border-b dark:border-gray-700">
                  <td className="px-6 py-4">1</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>

                  <td className="px-6 py-4 text-end">$2999</td>
                  <td className="px-6 py-4 text-end">
                    <p className="text-xs">2022-01-01</p>
                    <p className="text-xs">9: 45 PM</p>
                  </td>

                  <td
                    className="px-1 py-4 file:inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      <HiOutlinePencil className="size-5" />
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium rounded-e-lg text-red-600 bg-white border-t border-b border-gray-200 rounded-s-lghover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-red-500 dark:focus:text-white"
                    >
                      <HiOutlineTrash className="size-5" />
                    </button>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
  // mutate(null); // This clears the entire SWR cache
};

export default ProductList;
