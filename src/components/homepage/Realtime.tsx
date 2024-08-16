"use client";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Realtime = () => {
  const [realtime, setRealtime] = useState([]);

  const fetchRealtime = async () => {
    try {
      const response: Response = await fetch(
        "https://pantip.com/api/forum-service/home/get_suggest_topic_popular",
        {
          method: "POST",
          body: JSON.stringify({
            type: "room",
            limit: 1,
          }),
          headers: {
            "Content-Type": "application/json",
            ptauthorize: "Basic dGVzdGVyOnRlc3Rlcg==",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setRealtime(data.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchRealtime();
  }, []);
  return (
    <div>
      <div>
        {realtime?.map((item: any) => (
          <div>
            <div className="flex flex-col">
              <div className="basis-1/1">
                <h2>{item.room_name_th}</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
              {item?.topics?.map((topic: any) => (
                <a href={`https://pantip.com/topic/${topic.topic_id}`}>
                  <div className="card-header flex justify-center ">
                    <img
                      style={{ width: "100%", maxHeight: 250, minHeight: 250 }}
                      src={topic.thumbnail_url}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div key={item.id} className="card rounded-lg">
                    <div className="card-body p-0">
                      <h5>{topic.title}</h5>
                      <div className="flex flex-wrap gap-2">
                        {topic?.tags?.map((tag: any) => (
                          <span
                            key={tag.id}
                            className=""
                            style={{ color: "rgba(0,0,0,0.7)", fontSize: 10 }}
                            title={tag.name}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { Realtime };
