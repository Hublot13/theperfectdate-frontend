import React from "react";
import CardTitle from "../../Lib/CardTitle/CardTitle";
import iIcon from "../../../assets/images/i.svg";
import "./NeedToKnow.css";

const ToKnow = [
  {
    id: 0,
    content: "Around 40 to 50 balloons with ribbons are placed on the ceiling and rest are placed in the form of bunches or free floating on floor according to you.",
  },
  {
    id: 1,
    content: "Your address, balloon colour, & any other personal preferences will be taken after your booking.",
  },
  {
    id: 2,
    content: "Surge is applied for same day bookings.",
  },
  {
    id: 3,
    content: "Please arrange a stool or ladder for the decorator to reach the ceiling.",
  },
  {
    id: 4,
    content:
      "We do not use helium balloons for home use. We use air balloons, fix them to your ceiling with a removable cello-tape (generally no mark on ceiling but please remove immediately after your experience).",
  },
];

const NeedToKnow = () => {
  return (
    <div className="card">
      <CardTitle children="Need To Know" />
      {ToKnow.map((item, index) => (
        <div className="need-to-know-content" key={item} >
          <img src={iIcon} alt="" />
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NeedToKnow;
