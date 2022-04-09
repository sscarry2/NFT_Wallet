import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 49px;
  background: #212832;
  box-shadow: 8px 4px 20px rgba(0, 0, 0, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(48px);
  border-radius: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
