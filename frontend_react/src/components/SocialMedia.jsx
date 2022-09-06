import React from 'react';
import { BsTelegram, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.instagram.com/theermek">
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href="https://t.me/Theermek">
      <div>
        <BsTelegram />
      </div>
    </a>
    <a href="https://www.facebook.com/">
      <div>
        <FaFacebookF />
      </div>
    </a>
  </div>
);

export default SocialMedia;