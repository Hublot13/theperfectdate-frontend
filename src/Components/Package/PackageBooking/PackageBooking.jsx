import React from "react";
import "./PackageBooking.css";

const Booking = () => {
  return (
    <div>
      <div className="card">
        <h3 className="price">
          <span>
            <strike>₹1699</strike>
          </span>
          <span>₹</span>
          <span>1499</span>
          <span>/surprise</span>
        </h3>

        <div
          className="_experience-page-booking-column-pincode-date-buttons-container"
          id="id-experience-page-pincode-section"
        >
          <div className="_experience-page-booking-column-content-pincode-container margin-conatiner">
            <p className="_experience-page-booking-column-date-box booking-activeinput">
              <span className="input-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 384 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
              </span>
              <input
                className="booking-input-field"
                maxLength="6"
                minLength="6"
                type="number"
                placeholder="Enter Pincode"
                value=""
              />
            </p>
            <p className="dont-know-pincode">Don't know pincode ?</p>
          </div>

          <div className="_experience-page-booking-column-content-pincode-container">
            <p className="_experience-page-booking-column-date-box booking-disableinput">
              <span className="input-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                </svg>
              </span>
              <input
                className="booking-input-field"
                maxLength="6"
                minLength="6"
                type="text"
                placeholder="Select Date &amp; Time"
              />
            </p>
          </div>
          <p>
            Our decorator will come and complete the decoration{" "}
            <b>anytime between the selected time range</b>
          </p>
          <div className="mb-4"></div>
          <div></div>
          <div className="mb-4"></div>
          <div className="experience-summary-container">
            <div className="section"></div>
            <div className="mb-1"></div>
          </div>
          <button type="button" className="btn_full false">
            <div>
              Book Now
              <span className="arrow-right">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
