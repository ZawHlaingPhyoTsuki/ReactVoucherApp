import React from "react";

export const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full xs:min-w-[320px]  sm:w-[540px] md:w-[720px] lg:w-[960px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;