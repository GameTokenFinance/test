import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/mainpage/top.js";
import Blog from "components/mainpage/blog.js";
import Footer from "components/mainpage/footer.js";
import Faq from "components/mainpage/faq";
import Products from "components/mainpage/products";
import FarmSlider from "components/mainpage/farmslider";
import MarketSlider from "components/mainpage/marketCard";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Faq />
    <Products />
    <FarmSlider />
    <MarketSlider />
    <Blog />
    <Footer />
  </AnimationRevealPage>
);
