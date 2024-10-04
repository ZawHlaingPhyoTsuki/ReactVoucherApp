import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <div className="w-full flex gap-3 mb-3 px-4">
      <Link to="/" className="text-gray-500">
        Home
      </Link>
      <span className="text-gray-500">/</span>
      <span className="font-bold" >{currentPageTitle}</span>
    </div>
  );
};

export default Breadcrumb;
