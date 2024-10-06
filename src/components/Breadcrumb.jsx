import React from "react";
import { HiHome } from "react-icons/hi";
import { HiChevronDoubleRight, HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <div className="w-full flex gap-3 mb-3">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              className="inline-flex gap3 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HiHome className="size-5" />
              Home
            </Link>
          </li>

          {links && links.map((link, index) => (
            <li key={index} className="inline-flex gap-3 items-center">
              <HiChevronRight />
              <Link
                to={link.path}
                className=" inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {link.title}
              </Link>
            </li>
          ))}

          <li aria-current="page">
            <div className="flex gap-3 items-center">
              <HiChevronRight/>
              <span className=" text-sm font-bold  dark:text-gray-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
