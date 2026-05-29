import React from 'react';
//@ts-expect-error
import Icon from '../../../assets/svg/work_icon.svg?react';
type Props = {};

function WorkIcon({}: Props) {
  return <Icon />;
}

export default WorkIcon;
