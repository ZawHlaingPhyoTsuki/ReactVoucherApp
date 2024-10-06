import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";
tailspin.register();



const ProductCreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    console.log(data);
    setIsSending(true);

    await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSending(false);
    reset();
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Product created successfully");
  };

  return (
    <div className="w-full max-w-lg p-4 mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex justify-between ">
        <h1 className="text-3xl font-bold mb-5">Create New Product</h1>
        <Link
          to={"/product"}
          className="text-lg text-blue-600 hover:text-blue-800"
        >
          <ImCross />
        </Link>
      </div>
      <p className="mb-5 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facere
        cum dolores. Ratione rerum eum eaquuas vero beatae.
      </p>
      <form
        onSubmit={handleSubmit(handleCreateProduct)}
        className="flex flex-col gap-4 "
      >
        <div className=" ">
          <label
            htmlFor="product_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Product Name
          </label>
          <input
            id="product_name"
            type="text"
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
            className={`bg-gray-50 border ${
              errors.product_name
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Apple"
          />
          {errors.product_name?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">
              Product name is required
            </p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p className=" text-red-500 text-sm mt-1">
              Product name must be greater than 3 characters
            </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p className=" text-red-500 text-sm mt-1">
              Product name must be less than 10 characters
            </p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            {...register("price", {
              required: true,
              min: 100,
              max: 10000,
            })}
            id="price"
            className={`bg-gray-50 border ${
              errors.price
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } w-full text-gray-900 text-sm rounded-lg  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="$5"
          />
          {errors.price?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">
              Product price is required
            </p>
          )}
          {errors.price?.type === "min" && (
            <p className=" text-red-500 text-sm mt-1">
              Product price must be greater than $100
            </p>
          )}
          {errors.price?.type === "max" && (
            <p className=" text-red-500 text-sm mt-1">
              Product price must be less than $10000
            </p>
          )}
        </div>
        <div className="flex items-center gap-1">
          <input
            id="allCorrect"
            {...register("allCorrect", {
              required: true,
            })}
            type="checkbox"
            defaultValue
            className={`w-4 h-4 ${
              errors.allCorrect
                ? "border-red-500 focus:ring-red-500"
                : "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
            }  bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
          />
          <label
            htmlFor="allCorrect"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make sure all information is correct
          </label>
          {errors.allCorrect?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">Please Check the box</p>
          )}
        </div>
        <div className="flex items-center gap-1 ">
          <input
            {...register("back_to_product_list")}
            id="back-to-product-list"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="back-to-product-list"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Back to Product List after saving
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex h-10 justify-center items-center gap-3 text-white w-1/4 sm:w-1/3 mx-auto mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 whitespace-nowrap "
        >
          <span className="text-xs sm:text-sm">Save Product</span>
          {isSending && (
            <l-tailspin
              size="20"
              stroke="5"
              speed="0.9"
              color="white"
              className={`${isSending ? "block" : "hidden"}`}
            ></l-tailspin>
          )}
        </button>
      </form>
    </div>
  );
};

export default ProductCreateCard;
