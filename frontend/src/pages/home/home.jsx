import React from "react";
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import Rightbar from "../../components/rightbar/Rightbar";

function home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Timeline />
        <Rightbar />
      </div>
    </>
  );
}

export default home;
