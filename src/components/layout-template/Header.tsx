"use client";
import { FaSearch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { DropdownButton } from "@/components/button/ButtonDropdown";
import { useState, useEffect } from "react";
import { SlideMenu } from "./SlideMenu";
const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div >
      <header className={"w-full fixed top-0 bg-white"} style={{zIndex:1000}}>
        <div className="container mx-auto h-40 relative">
          <div className="flex flex-row h-20 items-center">
            <div className="basis-1/3 ">
              <div className={`${scrolling ? "fixed top-4" : ""}`}>PANTIP</div>
            </div>
            <div className="basis-1/3 space-x-4">
              <div className="flex justify-center ">
                <div
                  className={`w-2/4  flex flex-col transition-transform duration-300 ${scrolling ? "fixed top-5" : "translate-y-full absolute  bottom-20"}`}
                  style={{ zIndex: 1000 }}
                >
                  <div>
                    <div className={`flex justify-center items-center `}>
                      <>
                        {showSearchBar && (
                          <FaSearch style={{ marginRight: 10 }} />
                        )}
                      </>
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
                        onFocus={() => setShowSearchBar(true)}
                        onBlur={() => setShowSearchBar(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`basis-1/3 w-full space-x-4 flex justify-center items-center transition-opacity duration-300 ${scrolling ? "hidden" : "block"}`}
              >
                <div>
                  <button className="flex items-center justify-center space-x-2">
                    <FaSearch />
                    <span>ตั้งกระทู้</span>
                  </button>
                </div>
                <div>
                  <button className="flex items-center justify-center space-x-2">
                    <IoIosPeople />
                    <span>คอมมูนิตี้</span>
                  </button>
                </div>
              </div>
            </div>
            <div className={`basis-1/3 flex justify-end`}>
              <div
                className={`flex justify-end  ${scrolling ? "fixed top-4" : ""}`}
              >
                <DropdownButton />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <SlideMenu />
        </div>
      </header>
    </div>
  );
};

export { Header };
