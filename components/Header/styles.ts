import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 88px;
  background: rgba(33, 40, 50, 0.32);
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(48px);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: ${theme.SPACING_14} ${theme.SPACING_16};
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: linear-gradient(180deg, #10ce4c 9.9%, #3f9c71 78.38%);
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.04rem;
  color: ${theme.WHITE_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${theme.SPACING_8};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const PhoneNumber = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: ${theme.SMALL_PARAGRAPH_SIZE};
  color: ${theme.WHITE_COLOR};
`;

export const ScanQRButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 ${theme.SPACING_14};
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.02);
  border-radius: ${theme.BORDER_RADIUS_8};
  color: ${theme.WHITE_COLOR};
  font-size: ${theme.MEDIUM_PARAGRAPH_SIZE};
`;
