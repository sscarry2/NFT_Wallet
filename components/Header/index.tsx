import React, {FC} from 'react';
import Icon from '../Icon';
import theme from '../../utils/theme';
import {Circle, Container, PhoneNumber, Row, ScanQRButton} from './styles';

interface IProps {}

const Header: FC<IProps> = () => {
  return (
    <Container>
      <Row>
        <Circle>W</Circle>
        <PhoneNumber>+6681234xxxx</PhoneNumber>
      </Row>
      <ScanQRButton>
        <Icon src="/assets/icons/scan.png" style={{marginRight: theme.SPACING_8}} />
        สแกน
      </ScanQRButton>
    </Container>
  );
};

export default Header;
