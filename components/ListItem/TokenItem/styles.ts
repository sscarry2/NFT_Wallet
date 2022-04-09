import styled from 'styled-components';
// import theme from "../../utils/theme";

export const TokenContainer = styled.div`
  background: rgba(0, 0, 0, 0.06);
  border-radius: ${(props) => props.theme.BORDER_RADIUS_12};
  padding: ${(props) => `${props.theme.SPACING_12} ${props.theme.SPACING_16}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: ${(props) => props.theme.SPACING_10};
`;

export const TokenImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70px;
  margin-right: ${(props) => props.theme.SPACING_10};
`;

export const TokenIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const TokenAmountWrapper = styled.div`
  width: 50%;
`;

export const TextPrimary = styled.div`
  font-weight: 700;
  font-size: ${(props) => props.theme.MEDIUM_PARAGRAPH_SIZE};
  color: ${(props) => props.theme.WHITE_COLOR};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextSecondary = styled.div`
  font-size: ${(props) => props.theme.SMALLER_PARAGRAPH_SIZE};
  color: ${(props) => props.theme.WHITE_COLOR};
  opacity: 0.5;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
