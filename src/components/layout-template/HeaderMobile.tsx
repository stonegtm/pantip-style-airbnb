"use client";

import { DropdownButton } from "../button/ButtonDropdown";
import { SlideMenu } from "./SlideMenu";
const HeaderMobile = () => {
  return (
    <div style={{ minHeight: "160px" }}>
      <header className={"w-full fixed top-0 bg-white"} style={{zIndex:1000}}>
        <div className={`container mx-auto relative`}>
          <div className="flex flex-row h-20 items-center">
            <div className="basis-11/12 flex justify-center ">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.09)",
                  borderRadius: "20px",
                  width: "90%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>

            <div className={`basis-1/12 flex justify-center`}>
              <DropdownButton />
            </div>
          </div>
        </div>
        <div>
          <SlideMenu />
        </div>
      </header>
    </div>
  );
};

export { HeaderMobile };
