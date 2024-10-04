import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link to={url} className="flex gap-2 items-center flex-col bg-blue-500 text-white p-5 rounded-lg">
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
