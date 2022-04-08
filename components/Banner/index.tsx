import React from 'react';
import {CustomCarousel, Indicator, SelectedIndicator} from './styles';

const banners = ['banner1.png', 'banner1.png', 'banner1.png'];

const Banner = () => {
  const renderIndicator = (
    onClickHandler: any,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    if (isSelected) {
      return <SelectedIndicator />;
    } else {
      return (
        <Indicator
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
          title={`${label} ${index + 1}`}
          aria-label={`${label} ${index + 1}`}
        />
      );
    }
  };
  return (
    <CustomCarousel
      autoPlay
      dynamicHeight
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      renderIndicator={renderIndicator}>
      {banners.map((banner, index) => (
        <div key={index}>
          <img src={`assets/banners/${banner}`} />
        </div>
      ))}
    </CustomCarousel>
  );
};

export default Banner;
