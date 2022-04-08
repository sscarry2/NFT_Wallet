import React from 'react';
import {Tab} from '../../utils/constants';
import {ButtonTab, TabsContainer} from './styles';

interface IProps {
  tab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Tabs = ({onTabChange, tab}: IProps) => {
  return (
    <TabsContainer>
      <ButtonTab active={tab === Tab.TOKENS} onClick={() => onTabChange(Tab.TOKENS)}>
        Tokens
      </ButtonTab>
      <ButtonTab active={tab === Tab.NFTS} onClick={() => onTabChange(Tab.NFTS)}>
        NFTs
      </ButtonTab>
    </TabsContainer>
  );
};

export default Tabs;
