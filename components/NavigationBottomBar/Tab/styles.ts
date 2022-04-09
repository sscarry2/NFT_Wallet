import styled from 'styled-components';
import DefaultIcon from '../../Icon';

interface ITabTitle {
  active: boolean;
}

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TabTitle = styled.div<ITabTitle>`
  color: ${(props) => props.theme.WHITE_COLOR};
  opacity: ${({active}) => (active ? 1 : 0.6)};
  font-weight: 500;
  font-size: 9px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  margin-top: ${(props) => props.theme.SPACING_4};
`;

export const Icon = styled(DefaultIcon)`
  object-fit: contain;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.05));
`;
