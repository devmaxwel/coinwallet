import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul className={classes.links}>
            <li>
              <Link to="/github">Github</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
            <li>
              <Link to="/home">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/wallets">Wallets</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.name}>
        <span>Import Wallet</span>
        <p>[ Wallet Connect ]</p>
      </div>
    </div>
  );
};

export default Header;
