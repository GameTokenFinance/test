import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"


import BackgroundAsImageWithCenteredContentHero from "components/mainpage/top.js";
import ThreeColumnDashedBorderFeatures from "components/mainpage/products";
import SliderCards from "components/mainpage/farmslider";
import TabGridCards from "components/mainpage/marketCard.js";
import ThreeColSimpleWithImageAndDashedBorderBlog from "components/mainpage/blog.js";
import SimpleWithSideImageFAQS from "components/mainpage/faq.js";
import SimpleFiveColumnFooter from "components/mainpage/footer";


export const components = {
  

  

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
       
        BackgroundAsImageWithCenteredContent: {
          name: "Full Width Background Image with centered content",
          component: BackgroundAsImageWithCenteredContentHero,
          url: "/components/blocks/Hero/BackgroundAsImageWithCenteredContent",
        },
      
      }
    },
  
    Features: {
      type: "Features Section",
      elements: {
        
        ThreeColumnDashedBorder: {
          name: "Three Column With Dashed Primary Border",
          component: ThreeColumnDashedBorderFeatures,
          url: "/components/blocks/Features/ThreeColumnDashedBorder",
        },
       
      }
    },

    Cards: {
      type: "Cards",
      elements: {
        Slider: {
          name: "Three Column Slider",
          component: SliderCards,
          url: "/components/blocks/Cards/Slider",
        },
      
        TabGrid: {
          name: "Tab Card Grid With Tab Switcher",
          component: TabGridCards,
          url: "/mainpage/marketCard",
        },
       
      }
    },

    Blog: {
      type: "Blog Section",
      elements: {
        
        ThreeColSimpleWithImageAndDashedBorder: {
          name: "Simple Three Column With Image and Dashed Border",
          component: ThreeColSimpleWithImageAndDashedBorderBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder",
        },
      } 
    },

   

    FAQS: {
      type: "FAQs Section",
      elements: {
        SimpleWithSideImage: {
          name: "Simple With Side Image",
          component: SimpleWithSideImageFAQS,
          url: "/components/blocks/FAQS/SimpleWithSideImage",
        },
        
      }
    },

   

    

    Footer: {
      type: "Footers Section",
      elements: {
        SimpleFiveColumn: {
          name: "Simple Five Column",
          component: SimpleFiveColumnFooter,
          url: "/components/blocks/Footer/SimpleFiveColumn",
        },
        
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
