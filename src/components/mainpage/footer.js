import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../assets/logo.png";
import MediumIcon from "../../images/medium-icon.png";
import Telegram from "../../images/telegram.png";
import Github from "../../images/github.png";
import Twitter from "../../images/twitter.png";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>GameTokenFinance.</LogoText>
          </LogoContainer>
          <CompanyDescription>
          GameTokenFinance is a gamer community project.
          </CompanyDescription>

          <SocialLinksContainer>
            <SocialLink href="https://github.com/GameTokenFinance">              
              <LogoImg src={Github} />
            </SocialLink>

            <SocialLink href="https://t.me/gametokenfi">
            <LogoImg src={Telegram} />
            </SocialLink>
            
            <SocialLink href="https://twitter.com/gametokenfi">
            <LogoImg src={Twitter} />
            </SocialLink>
            <SocialLink href="https://medium.com/@gametokenfi">
            <LogoImg src={MediumIcon} />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Useful Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="https://t.me/gametokenfi">GameToken Group</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://t.me/joinchat/Sp6QSD8exOw1Mzll">Price Channel</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://t.me/GameTokenAnnouncements">GameToken Announcements</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://t.me/gametokenproduct">GameToken Product</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="https://app.gametoken.finance/">Yield Farm</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://gametoken.store/">Game Market</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://gvault.gametoken.finance/">Game Vault</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://gdollar.gametoken.finance/">Game Dollar</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Contact</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="https://t.me/GameMasterFi">GameMaster</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://t.me/CaptainCorporate">GameToken CaptainCorporate</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Finn Joness</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://t.me/MertAyd">Mert Aydın</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
