import React, {FC} from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const Div = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: radial-gradient(
      169.9% 64.05% at 12.22% 90.19%,
      rgba(37, 53, 67, 0.46) 0%,
      rgba(24, 40, 97, 0) 100%
    ),
    radial-gradient(
      104.2% 51.46% at 106.25% 84.49%,
      rgba(68, 136, 36, 0.13) 0%,
      rgba(50, 136, 36, 0) 100%
    ),
    radial-gradient(
      61.91% 30.57% at 9.86% 30.63%,
      rgba(19, 135, 80, 0.12) 0%,
      rgba(19, 135, 80, 0) 100%
    ),
    radial-gradient(
      88.24% 37.78% at 116.94% 20.82%,
      rgba(224, 127, 37, 0.04) 0%,
      rgba(255, 249, 238, 0) 100%
    ),
    radial-gradient(110.98% 41.91% at 21.53% 9.36%, #2b3532 0%, #23272c 100%);
`;

const Container: FC<IProps> = (props) => {
  return <Div>{props.children}</Div>;
};

export default Container;
