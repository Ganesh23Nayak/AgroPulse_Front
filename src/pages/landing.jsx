import "slick-carousel/slick/slick.css";
import { Helmet } from 'react-helmet-async';
import "slick-carousel/slick/slick-theme.css";

import Landing from 'src/sections/LandingPage/Landing';

import '../styles/index.css';
import "../styles/flexboxgrid.min.css";



// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>AgroPulse </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Landing/>
    </>
  );
}
