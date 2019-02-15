import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{
        boxShadow: "5px 10px 10px 0 #e6e6e6",
        height: "4rem",
        backgroundColor: "lightgray",
        fontSize: "1.5rem"
      }}
    >
      <Link to="/" className="item">
        Streamer
      </Link>
      <div
        className="right menu"
        style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}
      >
        <GoogleAuth />
      </div>
    </div>
  );
};
