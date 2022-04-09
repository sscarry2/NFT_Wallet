import React, {useState} from 'react';
import {NavigationContainer} from './styles';
import Tab from './Tab';

const tabs = [
  {
    title: 'Wallet',
    src: '/assets/icons/wallet.png',
  },
  {
    title: 'Dapps',
    src: '/assets/icons/dapps.png',
  },
  {
    title: 'Bonus KUB',
    src: '/assets/icons/bonus.png',
  },
];

const NavigationBottomBar = () => {
  const [bottomTab, setBottomtab] = useState<number>(0);
  return (
    <NavigationContainer>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          src={tab.src}
          active={bottomTab === index}
          onClick={() => setBottomtab(index)}
        />
      ))}
    </NavigationContainer>
  );
};

export default NavigationBottomBar;
