import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
         New
      </a>

      <a className="menu-item" href="/">
        Edit
      </a>

      <a className="menu-item" href="/">
        Share
      </a>

      <a className="menu-item" href="/">
        Download
      </a>

    </Menu>
  );
};