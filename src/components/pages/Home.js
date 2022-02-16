import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./home.module.css";

const Home = () => {
  const [active, setActive] = useState("First");

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <button onClick={() => setActive("First")}>Phrase</button>
        <button onClick={() => setActive("Second")}>Keystore JSON</button>
        <button onClick={() => setActive("Third")}>Private Key</button>
      </div>

      {active === "First" && (
        <div className={classes.phrase}>
          <textarea placeholder="Phrase" />
        </div>
      )}
      {active === "Second" && (
        <div className={classes.phrase}>
          <textarea placeholder="Keystore JSON" />
        </div>
      )}

      {active === "Third" && (
        <div className={classes.private}>
          <input placeholder="Private Key" />
        </div>
      )}
      {active === "First" && (
        <span className={classes.span}>
          Typically 12 (sometimes 24) words separated by single space
        </span>
      )}

      {active === "Third" && (
        <span className={classes.span}>
          Typically 12 (sometimes 24) words separated by single space
        </span>
      )}
      {active === "Second" && (
        <div className={classes.private}>
          <input placeholder="Password" />
        </div>
      )}

      {active === "Second" && (
        <span className={classes.span}>
          Several lines of text beggining with '(.....)' plus the password you
          need to encrypt it
        </span>
      )}
      <div className={classes.actions}>
        <button>IMPORT</button>
      </div>
      <div className={classes.socials}>
        <ul>
          <li>
            <i class="fab fa-discord"></i>
            <Link to="">Discord</Link>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
            <Link to="">Twitter</Link>
          </li>
          <li>
            <i class="fab fa-github"></i>
            <Link to="">Github</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
