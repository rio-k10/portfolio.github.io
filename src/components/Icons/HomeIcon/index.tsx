import React from 'react';
//@ts-expect-error
import Icon from '../../../assets/svg/home_icon.svg?react';
type Props = {};

function HomeIcon({}: Props) {
  return <Icon />;
}

export default HomeIcon;
