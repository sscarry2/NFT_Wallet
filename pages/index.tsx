import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, {useState} from 'react';
import type {NextPage} from 'next';
import styled from 'styled-components';

//components
import Container from '../components/Container';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Tabs from '../components/Tabs';

//utils
import theme from '../utils/theme';
import {Tab} from '../utils/constants';

const BannerContainer = styled.div`
  padding-top: 112px;
  padding-left: ${theme.SPACING_12};
  padding-right: ${theme.SPACING_12};
`;
const TabsContainer = styled.div`
  margin: ${theme.SPACING_32} ${theme.SPACING_12} ${theme.SPACING_16} ${theme.SPACING_12};
`;

const Home: NextPage = () => {
  const [tab, setTab] = useState<Tab>(0);
  const onTabChange = (tab: Tab) => {
    setTab(tab);
  };
  return (
    <Container>
      <Header />
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <TabsContainer>
        <Tabs tab={tab} onTabChange={onTabChange} />
      </TabsContainer>
    </Container>
  );
};

export default Home;
