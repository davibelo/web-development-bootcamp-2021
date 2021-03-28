//jshint esversion:6
import React from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

function Header() {
  return (
    <header>
      <h1 className="header">
        <EmojiObjectsIcon />
        Keeper App
      </h1>
    </header>
  );
}
export default Header;
