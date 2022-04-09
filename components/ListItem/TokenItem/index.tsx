import React from 'react';
import {
  TokenIconWrapper,
  TextPrimary,
  TokenContainer,
  TokenImage,
  TokenAmountWrapper,
  TextSecondary,
} from './styles';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  amount: string | number;
  currency: string;
}

const TokenItem = ({title, amount, currency, ...props}: IProps) => {
  return (
    <TokenContainer>
      <TokenIconWrapper>
        <TokenImage {...props} />
        <TextPrimary>{title}</TextPrimary>
      </TokenIconWrapper>
      <TokenAmountWrapper>
        <TextPrimary style={{textAlign: 'right'}}>{amount}</TextPrimary>
        <TextSecondary>{currency}</TextSecondary>
      </TokenAmountWrapper>
    </TokenContainer>
  );
};

export default TokenItem;
