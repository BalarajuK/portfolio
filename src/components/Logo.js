import React from 'react';

import ProfileLogo from '../assets/images/profile.png';

import '../styles/Logo.scss';

function Logo() {
  return (
      <img className="logo__img" src={ProfileLogo}  alt=""/>
  );
}

export default Logo;
