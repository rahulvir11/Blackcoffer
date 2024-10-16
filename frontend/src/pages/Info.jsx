import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../components/Cart";
const Info = () => {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="flex h-fit flex-wrap items-center justify-center gap-5 pt-5">
          <Cart pragraph={"The highest intensity in a country or region by end year reflects the most significant event or trend in that area during the given time frame. This helps identify where the greatest impact occurred, providing insights for analysis and strategic planning."} Heading={"highest Intensity in Country/Region (End Year)"} path={'/intensity'}/>

          <Cart pragraph={"Viewing intensity and relevance by start and end years highlights the scale and significance of events over a specific period. It helps track how impactful and important trends evolve from their beginning to their conclusion, offering a clear picture of their development and influence."} Heading={"view intensity and relevance (start and ent years)"} path={'/year'}/>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 h-fit pb-5 mt-5">
          <Cart pragraph={"Viewing the impact ratio in countries by end year shows the relative effect of events or actions across nations at the close of a specific period. This helps assess how different countries were influenced or contributed to major global trends, providing valuable insights for analysis and planning."} Heading={"view Impact Ratio in countries (end year)"} path={'/likelihood'}/>
          <Cart Heading={"view Relevance "} pragraph={"Viewing relevance based on topic, year, sector, and country allows for a focused analysis of how important specific issues are within particular contexts. By analyzing relevance through these dimensions, we can understand the significance of certain topics in a given year, how they impact various sectors, and their importance within different countries. This approach helps identify key trends and patterns across different fields and regions."} path={"/relevance"}/>
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <NavLink
            to={"/deshboard"}
            className="capitalize inline-flex items-center px-3 py-2 text-xl font-medium glow-on-hover "
          >
            go to deshboard
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
    </>
  );
};

export default Info;
