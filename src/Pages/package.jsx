import React from 'react'
import PackageGallery from '../Components/Package/PackageGallery/PackageGallery';
import PackageDescription from "../Components/Package/PackageDescription/PackageDescription"
import "../styles/package.css"

const Product = () => {
  return (
    <div className='product-container'>
      <PackageGallery />
      <PackageDescription />
    </div>
  )
}

export default Product;