import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-between px-8 py-4 border">
        <div>ACC</div>
        <div className="flex gap-8">
          <Link to="/blog">Blog</Link>
          <Link to="/mail">Mail</Link>
          <Link to="/settings">Paramètres</Link>
        </div>
      </div>
    );
  }
}
