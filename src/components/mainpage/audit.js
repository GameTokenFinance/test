import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container as ContainerBase } from "components/misc/Layouts";
import rugdoc from "images/rugdoc.png";
import dappRadar from "images/dappradar.png"
import trust from "images/trust.svg"
import livew from "images/livew.png"
import safepal from "images/safepal.png"
import math from "images/math.png"
import techrate from "images/techrate.png"
import dexguru from "images/dexguru.png"


const Container = tw(ContainerBase)`bg-gray-900 -mx-8`
const Content = tw(ContentWithPaddingXl)``
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;

const ColumnContainer = tw.div`max-w-2xl`

const ImageContainer = tw(ColumnContainer)`mt-16 lg:mt-0 lg:ml-16 flex justify-end`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-gray-800 opacity-50`
export default ({

  pushDownFooter = false,

}) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
    
      <Content>
        <Row>
          
          <ImageContainer >
          <a href="https://rugdoc.io/project/gametoken/">
          <img src={rugdoc} alt=""  /></a>
         </ImageContainer>

       <ImageContainer>
       <a href="https://rugdoc.io/project/gametoken/">

       <img src={techrate} alt=""/>
       
       </a>
        
      
       </ImageContainer>

          
        </Row>
        <Row>
        <ImageContainer>
        <a href="https://dappradar.com/binance-smart-chain/marketplaces/gametokenfinance">
         
        <img src={dappRadar} alt=""/>
        
       
       </a> 
          </ImageContainer>

          <ImageContainer>
          <a href="https://www.livecoinwatch.com/price/GameToken-GMEV3">
        <img src={livew} alt="" />
        </a>
          </ImageContainer>
          <ImageContainer>
          <a href="https://dex.guru/token/0xdd87df4697527e6fbc5586cb0105bd8ab0fa7a61-bsc">
        <img src={dexguru} alt="" />
        </a>
          </ImageContainer>

      
        </Row>
        <Row>
        <ImageContainer>
        <a href="https://rugdoc.io/project/gametoken/">
           <img src={trust} alt="" href="https://rugdoc.io/project/gametoken/"/>
           </a>
          </ImageContainer>
          <ImageContainer>
          <a href="https://rugdoc.io/project/gametoken/">
          <img src={safepal} alt="" href="https://rugdoc.io/project/gametoken/"/>
          </a>
          </ImageContainer>
          <ImageContainer>
          <a href="https://rugdoc.io/project/gametoken/">
          <img src={math} alt="" href="https://rugdoc.io/project/gametoken/"/>
          </a>
          </ImageContainer>
    
     </Row>
        <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
      </Content>
    </Container>
  );
};
