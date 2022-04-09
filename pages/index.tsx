import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, {useState, useEffect, ChangeEvent} from 'react';
import type {NextPage} from 'next';
import styled from 'styled-components';

//components
import Container from '../components/Container';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Tabs from '../components/Tabs';
import SearchInput from '../components/SearchInput';
import TokenItem from '../components/ListItem/TokenItem';
import NavigationBottomBar from '../components/NavigationBottomBar';

//utils
import theme from '../utils/theme';
import {Tab} from '../utils/constants';
import {IToken} from '../utils/types';
import {tokens} from '../utils/mock';

const BannerContainer = styled.div`
  padding-top: 112px;
  padding-left: ${theme.SPACING_12};
  padding-right: ${theme.SPACING_12};
`;
const ListItemContainer = styled.div`
  margin: ${theme.SPACING_32} ${theme.SPACING_12} ${theme.SPACING_50} ${theme.SPACING_12};
`;

const NavigationContainer = styled.div`
  margin: 0 ${theme.SPACING_12};
`;

const MockComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.WHITE_COLOR};
`;

const Home: NextPage = () => {
  const [tab, setTab] = useState<Tab>(0);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResult, setSearchResult] = useState<IToken[]>([]);

  useEffect(() => {
    searchTokens();
  }, [searchInput]);

  const searchTokens = () => {
    const results = tokens.filter((token) => token.title.toLowerCase().includes(searchInput));
    setSearchResult(results);
  };

  const onTabChange = (tab: Tab) => {
    setTab(tab);
    setSearchInput('');
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const renderList = () => {
    if (tab === Tab.TOKENS) {
      return (
        <React.Fragment>
          <SearchInput onSearch={onSearch} />
          {searchResult.map((token, index) => (
            <TokenItem
              key={index}
              src={token.src}
              title={token.title}
              amount={token.amount}
              currency={token.currency}
            />
          ))}
        </React.Fragment>
      );
    } else {
      return <MockComponent>Welcome to Mock NFTs Tab</MockComponent>;
    }
  };
  return (
    <Container>
      <Header />
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <ListItemContainer>
        <Tabs tab={tab} onTabChange={onTabChange} />
        {renderList()}
      </ListItemContainer>
      <NavigationContainer>
        <NavigationBottomBar />
      </NavigationContainer>
    </Container>
  );
};

export default Home;
