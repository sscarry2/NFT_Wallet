import styled from 'styled-components';
import theme from '../../utils/theme';

interface IButtonTab {
  active?: boolean;
}

export const TabsContainer = styled.div`
  background: rgba(37, 39, 45, 0.24);
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.02);
  border-radius: ${theme.BORDER_RADIUS_8};
  padding: ${theme.SPACING_4};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonTab = styled.div<IButtonTab>`
  width: 50%;
  background: ${({active}) => (active ? 'rgba(95, 120, 120, 0.24)' : 'transparent')};
  border-radius: ${theme.BORDER_RADIUS_8};
  color: ${theme.WHITE_COLOR};
  opacity: ${({active}) => (active ? 1 : 0.56)};
  font-size: ${theme.MEDIUM_PARAGRAPH_SIZE};
  font-weight: 700;
  text-align: center;
  padding: 9px;
`;
