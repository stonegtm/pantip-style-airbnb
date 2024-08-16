"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Hightlight = () => {
  const [highlight, setHightlight] = useState([]);

  const fetchHightlight = async () => {
    try {
      const response: Response = await fetch(
        "https://pantip.com/api/forum-service/home/get_highlight",
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
      console.log(data);
      setHightlight(data.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchHightlight();
  }, []);
  return (
    <div>
      <h2>Hightlight</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
        {highlight.map((item: any) => (
          <div key={item.id} className="card rounded-lg p-2">
            <div className="card-header flex justify-center ">
              <div style={{ width: "90%" }}>
                <Slider {...carouselSettings}>
                  {item.image_url.map((image: string, index: number) => (
                    <div key={index} className="carousel-slide">
                      <img
                        style={{ width: "100%" }}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="card-body p-4">
              <h5>{item.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { Hightlight };
