import React, {ImgHTMLAttributes} from 'react';
import theme from '../../utils/theme';

type IProps = ImgHTMLAttributes<HTMLImageElement>;

const Icon = (props: IProps) => {
  const {src, width = theme.ICON_SIZE_16, height = theme.ICON_SIZE_16, style} = props;
  return <img {...props} src={src} style={{width, height, ...style}} />;
};

export default Icon;
