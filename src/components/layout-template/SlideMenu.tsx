"use client";

import React from "react";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
interface RoomRecommendation {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  description: string;
  link_url: string;
  room_icon_url: string;
  is_pinned: boolean;
  pinned_time: string | null; // Assuming `pinned_time` can be a string or null
  order: number | null; // Assuming `order` can be a number or null
}
const SlideMenu = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab
  const [rommRec, setRoomRec] = useState([]);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const fetchRoomRecommend = async () => {
    try {
      const response: Response = await fetch(
        "https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code=%7Bryq3skh88eXqGpP6lwHa%7D",
        {
          method: "GET",
          headers: {
            ptauthorize: "Basic dGVzdGVyOnRlc3Rlcg==",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setRoomRec(data.data);
      // Handle the data as needed
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchRoomRecommend();
  }, []);
  return (
    <div className="relative ">
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2  hidden md:block"
        aria-label="Scroll left"
        style={{
          background: "#fff",
          boxShadow: "rgb(255 255 255) 0px 1px 30px 30px",
          border: "1px solid rgba(0,0,0,0.5)",
          borderRadius: "100%",
          padding: "5px",
        }}
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2  hidden md:block"
        aria-label="Scroll right"
        style={{
          background: "#fff",
          boxShadow: "rgb(255 255 255) 0px 1px 30px 30px",
          border: "1px solid rgba(0,0,0,0.5)",
          borderRadius: "100%",
          padding: "5px",
        }}
      >
        <IoIosArrowForward />
      </button>
      <div className="pc-version-slide">
        <nav
          ref={scrollContainerRef}
          className="flex gap-x-1 overflow-x-auto custom-scrollbar-hide md:overflow-x-auto "
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {rommRec.map((item: RoomRecommendation) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`py-4 px-2 inline-flex items-center gap-x-2 text-sm whitespace-nowrap border-b-2 border-transparent text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500
            ${activeTab === item.id ? "font-semibold border-blue-600 text-blue-600" : ""}
          `}
              id={`tabs-with-underline-item-${item.id}`}
              aria-selected={activeTab === item.id}
              data-hs-tab={`#tabs-with-underline-${item.id}`}
              aria-controls={`tabs-with-underline-${item.id}`}
              role="tab"
              style={{ color: "#000" }}
            >
              {/* <img style={{width:"20px"}} src={item.room_icon_url} alt={item.name} /> */}
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export { SlideMenu };
