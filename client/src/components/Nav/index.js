import React from "react";
import { StoreProvider } from "../../utils/GlobalState";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Your personal CMS
      </a>
      {/* Display this if the current state is loading */}
      {StoreProvider.loading ? <a> Loading...</a> : <></>}
    </nav>
  );
};

export default Nav;
