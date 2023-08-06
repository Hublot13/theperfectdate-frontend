import React from "react";
import "./PackageIncludes.css";
import { BsCheck2 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import CardTitle from "../../Lib/CardTitle/CardTitle";

const Includes = [
  {
    id: 0,
    content: "100 balloons (colour of your choice).",
    flag: true,
  },
  {
    id: 1,
    content: "Happy Birthday Letter Foil Balloons.",
    flag: true,
  },
  {
    id: 2,
    content: "All Taxes.",
    flag: true,
  },
  {
    id: 3,
    content: "Delivered to your home.",
    flag: true,
  },
  {
    id: 4,
    content:
      "All Safety Precautions Followed by Decorator - Regular Temp Checks, Using Hand Sanitisers & Wearing Face Mask.",
    flag: true,
  },
  {
    id: 5,
    content:
      "A professional decorator will come for decoration at your chosen location and time slot.",
    flag: false,
  },
];

const PackageIncludes = () => {
  return (
    <>
      <div className="card">
        <CardTitle children="Includes" />
        <div className="includes-body">
          {Includes.map((item, index) => (
            <p className="includes-list" key={item}>
              <span>
                {item.flag===true ? <BsCheck2 color="#43A047" size={"1.5rem"} /> : <RxCross2 color="#D11A2A" size={"1.5rem"} /> }
              </span>
              <p>{item.content}</p>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default PackageIncludes;
