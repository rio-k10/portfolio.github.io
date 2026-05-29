import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

function Logo({}: Props) {
  const navigate = useNavigate();
  const onClick = () => navigate('/');

  return (
    <div className='logo' onClick={onClick}>
      R
    </div>
  );
}

export default Logo;
