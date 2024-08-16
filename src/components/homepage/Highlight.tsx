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

interface HighlightItem {
  id: string; // Adjust this type based on your API response
  name: string;
  image_url: string[];
}

const Highlight = () => {
  const [highlight, setHighlight] = useState<HighlightItem[]>([]);

  const fetchHighlight = async () => {
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
      setHighlight(data.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchHighlight();
  }, []);

  return (
    <div>
      <h2>Highlight</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {highlight.map((item) => (
          <div key={item.id} className="card rounded-lg p-2">
            <div className="card-header flex justify-center">
              <div style={{ width: "90%" }}>
                <Slider {...carouselSettings}>
                  {item.image_url.map((image, index) => (
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

export { Highlight };
