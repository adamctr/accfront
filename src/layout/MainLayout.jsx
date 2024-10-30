import React, { Component } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="">
          <main className="flex-1 mx-8 py-4">
            <Outlet />
          </main>
        </div>
      </>
    );
  }
}
