import React from 'react';
//@ts-expect-error
import Icon from '../../../assets/svg/about_icon.svg?react';

type Props = {};

function AboutIcon({}: Props) {
  return <Icon />;
}

export default AboutIcon;
