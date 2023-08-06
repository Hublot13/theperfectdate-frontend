import React from "react";
import PackageTItle from "../PackageTitle/PackageTitle"
import PackageBooking from "../PackageBooking/PackageBooking"
import PackageIncludes from "../PackageIncludes/PackageIncludes";
import AboutPackage from "../AboutPackage/AboutPackage";
import './PackageDescription.css'
import NeedToKnow from "../NeedToKnow/NeedToKnow";

const PackageDescription = () => {
  return (
    <div className="d-flex flex-direction-column product-description">
      <PackageTItle />
      <PackageBooking />
      <PackageIncludes />
      <AboutPackage />
      <NeedToKnow />
    </div>
  );
};

export default PackageDescription;
