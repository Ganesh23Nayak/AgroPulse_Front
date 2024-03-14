import React from "react";

import ProductsPage from "./products";
import Footer from "../components/Sections/Footer";
import TopNavbar from "../components/Nav/TopNavbar";
// Sections

import '../styles/index.css';
import "../styles/flexboxgrid.min.css";

export default function Market() {
  return (
    [
    <TopNavbar />,
    <ProductsPage/>,
    <Footer/>
    ]
    
    );
}


