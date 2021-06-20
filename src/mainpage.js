import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/mainpage/top.js";
import Blog from "components/mainpage/blog.js";
import Footer from "components/mainpage/footer.js";
import Faq from "components/mainpage/faq";
import Products from "components/mainpage/products";

import MarketSlider from "components/mainpage/marketCard";
import Audit from "components/mainpage/audit";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Faq />
    <Products />
 
    <MarketSlider />
    <Audit />
    <Footer />
  </AnimationRevealPage>
);
