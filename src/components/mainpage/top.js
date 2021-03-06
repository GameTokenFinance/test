import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line


import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://wallpapercave.com/wp/uComdlQ.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="https://www.gametoken.finance/">
        Home
      </NavLink>
      <NavLink href="https://www.gametoken.store/">
        GameMarket
      </NavLink>
      <NavLink href="https://gvault.gametoken.finance/">
        GameVault
      </NavLink>
      <NavLink href="https://gdollar.gametoken.finance/">
        GameDollar
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="https://app.gametoken.finance/">
        LaunchApp
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
              GAMETOKEN
              <br />
              The #1 Gamer Market on BSC
          </Heading>
          <br />
          <br />
          <PrimaryLink href="https://dex.apeswap.finance/#/swap?outputCurrency=0xDD87Df4697527e6fBc5586cB0105bD8aB0FA7A61">Buy GameToken</PrimaryLink>
        </Content>
      </HeroContainer>
    </Container>
  );
};
