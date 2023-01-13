import React, { useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/massmailer">
        Mass Mailer
      </a>
      <a className="menu-item" href="/lists">
        Contact lists
      </a>
      <a className="menu-item" href="/settings">
        account management
      </a>
      
    </Menu>
  );
};