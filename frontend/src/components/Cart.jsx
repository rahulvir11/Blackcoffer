import React from "react";
import { NavLink } from "react-router-dom";

const Cart = ({Heading,pragraph,path}) => {
  return (
    <div >
      <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-white ">
        <NavLink to={"#"}>
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </NavLink>
        <div className="p-5">
          <NavLink to={"#"}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {Heading}
            </h5>
          </NavLink>
          <p className="mb-3 font-normal  text-gray-900 ">
           {pragraph}
          </p>
          <NavLink
            to={path}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  glow-on-hover">
            view graph
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
