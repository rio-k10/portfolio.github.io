import React from 'react';
//@ts-expect-error
import Icon from '../../../assets/svg/skills_icon.svg?react';
type Props = {};

function SkillsIcon({}: Props) {
  return <Icon />;
}

export default SkillsIcon;
