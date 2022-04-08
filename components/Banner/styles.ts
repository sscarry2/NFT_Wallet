import styled from 'styled-components';
import theme from '../../utils/theme';
import {Carousel} from 'react-responsive-carousel';

export const SelectedIndicator = styled.li`
  width: 20px;
  height: 8px;
  background: ${theme.PRIMARY_GREEN_COLOR};
  border-radius: ${theme.BORDER_RADIUS_18};
  margin: 0 ${theme.SPACING_8};
  display: inline-block;
`;

export const Indicator = styled.li`
  width: 8px;
  height: 8px;
  border-radius: ${theme.BORDER_RADIUS_18};
  background: ${theme.GRAY_COLOR};
  opacity: 0.2;
  margin: 0 ${theme.SPACING_8};
  display: inline-block;
`;

export const CustomCarousel = styled(Carousel)`
  .carousel {
    overflow: visible;
    .control-dots {
      bottom: -30px;
    }
  }
`;
