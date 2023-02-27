import React, { useEffect } from "react";
import "./styles.css";
import Slider from "react-slick/lib/slider.js";

const MainpageSlider = (params) => {
  useEffect(() => {
    document.getElementsByClassName("slick-next")[0].textContent = ">";
    document.getElementsByClassName("slick-prev")[0].textContent = "<";
  }, []);
  return (
    <Slider>
      {params.slider.map((item, index) => {
        return (
          <div key={index} className="item">
            <div
              className="image"
              style={{
                height: "500px",
                display: "flex",
                backgroundImage: `url('${import.meta.env.PUBLIC_URL}${
                  item.image.url
                }')`,
              }}
            ></div>

            <div className="text"
             
            >
              <h1
                className=""
                style={{
                  fontSize: "30px",
                }}
              >
                {item.title}
              </h1>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MainpageSlider;
