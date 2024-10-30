import React, { Component } from "react";
import SidebarAI from "../elements/SidebarAI";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default class ArticleLayout extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="flex h-0 min-h-screen ">
          <div className="w-3/12"></div>
          <main className="w-[933px]">
            <Outlet />
          </main>
          <SidebarAI></SidebarAI>
        </div>
      </>
    );
  }
}
