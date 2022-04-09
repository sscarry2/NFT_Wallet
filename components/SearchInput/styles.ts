import styled from 'styled-components';
import theme from '../../utils/theme';

export const SearchContainer = styled.div`
  background: rgba(28, 29, 34, 0.24);
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: ${theme.SPACING_12};
  margin: ${theme.SPACING_16} 0;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  margin-left: ${theme.SPACING_8};
  color: ${theme.WHITE_COLOR};

  :focus {
    outline: none;
  }
`;
