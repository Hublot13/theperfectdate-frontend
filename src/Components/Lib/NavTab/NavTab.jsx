import React from "react";
import "./NavTab.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function NavTab() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="navtab-container">
      <Carousel
        // swipeable={false}
        // draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"

        customRightArrow={<IoIosArrowForward />}
        customLeftArrow={<IoIosArrowBack />}
      >
        <a href="#birthday" className="slide-card-container title-tab  ">
          <img src="https://i.ibb.co/NV2PH3g/icon-kids-birthday-min.png" />
          <span>Birthday</span>
        </a>
        <a href="#anniversary" className="slide-card-container title-tab  ">
          <img src="https://i.ibb.co/XFxyfgH/annivesary-decoration.png" />
          <span>Anniversary</span>
        </a>
        <a href="#candle" className="slide-card-container title-tab  ">
          <img src="	https://i.ibb.co/2srJ6nW/icon-candlelight-dinner-min.png" />
          <span>Candle Light Dinner</span>
        </a>
        <a href="#house" className="slide-card-container title-tab  ">
          <img src="https://i.ibb.co/txV0qT5/icon-diy-kit-min.png" />
          <span>House Party</span>
        </a>
        <a href="#birthday" className="slide-card-container title-tab  ">
          <img src="https://i.ibb.co/NV2PH3g/icon-kids-birthday-min.png" />
          <span>Birthday</span>
        </a>
        <a href="#anniversary" className="slide-card-container title-tab  ">
          <img src="https://i.ibb.co/XFxyfgH/annivesary-decoration.png" />
          <span>Anniversary</span>
        </a>
        <a href="#candle" className="slide-card-container title-tab  ">
          <img src="	https://i.ibb.co/2srJ6nW/icon-candlelight-dinner-min.png" />
          <span>Candle Light Dinner</span>
        </a>
        <a href="#house" className="slide-card-container title-tab  ">
          <img src="https://i.ibb.co/txV0qT5/icon-diy-kit-min.png" />
          <span>House Party</span>
        </a>
      </Carousel>
    </div>
  );
}
