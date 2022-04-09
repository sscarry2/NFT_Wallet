import React from 'react';
import {TabContainer, TabTitle, Icon} from './styles';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  title?: string;
  iconStyles?: React.CSSProperties;
  active: boolean;
}

const Tab = ({src, title, active, iconStyles, ...props}: IProps) => {
  return (
    <TabContainer {...props}>
      <Icon src={src} style={iconStyles} />
      {title && <TabTitle active={active}>{title}</TabTitle>}
    </TabContainer>
  );
};

export default Tab;
