import React, { useState } from "react";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiSearch,
} from "react-icons/hi";
import { useSWRConfig } from "swr";
// import { bouncy } from "ldrs";
import { bouncy } from 'ldrs'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

bouncy.register()

// Default values shown

// Default values shown

const ProductListRow = ({
  product: { id, product_name, price, created_at },
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const { mutate } = useSWRConfig();

  const date = new Date(created_at);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + "/products/" + id, {
      method: "DELETE",
    });
    toast.success("Product deleted successfully");
    mutate(import.meta.env.VITE_API_URL + "/products");

    // console.log(id);
  };

  return (
    <tr className=" border-b dark:border-gray-700">
      <td className="px-6 py-4">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>

      <td className="px-6 py-4 text-end">$ {price}</td>
      <td className="px-6 py-4 text-end">
        <p className="text-xs">{currentDate}</p>
        <p className="text-xs">{currentTime}</p>
      </td>

      <td className="">
        <div className=" inline-flex rounded-md shadow-sm" role="group">
          <Link
            to={`/product/edit/${id}`}
            className=" size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil className="" />
          </Link>

          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex justify-center items-center text-sm font-medium hover:bg-gray-100 hover:text-red-700 rounded-e-lg text-red-600 bg-white border-t border-b border-gray-200 rounded-s-lghover:bg-gray-100  focus:z-10 focus:ring-1 focus:ring-red-500  focus:text-red-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-red-300 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="black"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductListRow;
