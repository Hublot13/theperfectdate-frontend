import React from "react";
import "./Cardslide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import Product from "../../../Pages/package";
import { Route, Routes, Link } from "react-router-dom";

export default function CardSlide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Routes>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
      <div id="birthday" className="carousel-cont">
        <div className="crousel-body">
          <h2>Birthday</h2>
          <hr />
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
          >
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
          </Carousel>
        </div>
      </div>

      {/* TILL HERE */}
      <div id="anniversary" className="carousel-cont">
        <div className="crousel-body">
          <h2>Anniversary</h2>
          <hr />
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
          >
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
      <div id="candle" className="carousel-cont">
        <div className="crousel-body">
          <h2>Candle Light Dinner</h2>
          <hr />
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
          >
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="carousel-cont">
        <div className="crousel-body">
          <h2>House Party</h2>
          <hr />
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
          >
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
            <div className="slide-card-container">
              <Link to="/product">
                <Card />
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
