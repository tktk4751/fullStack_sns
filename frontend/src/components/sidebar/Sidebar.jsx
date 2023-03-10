import {
  Home,
  Search,
  Notifications,
  MessageRounded,
  Bookmark,
  Person,
  Settings,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import SidebarFriend from "../sidebarFriend/SidebarFriend";
import { Users } from "../../dummyData";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {/* <Home className="sidebarIcon" /> */}
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemTex">๐ </span>
              <span className="sidebarListItemText">ใใผใ </span>
            </Link>
          </li>
          <li className="sidebarListItem">
            {/* <Search className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">๐</span>
            <span className="sidebarListItemText">ๆค็ดข</span>
          </li>
          <li className="sidebarListItem">
            {/* <Notifications className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">๐</span>
            <span className="sidebarListItemText">้็ฅ</span>
          </li>
          <li className="sidebarListItem">
            {/* <MessageRounded className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">๐ฉ</span>
            <span className="sidebarListItemText">ใกใผใซ</span>
          </li>
          <li className="sidebarListItem">
            {/* <Bookmark className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">๐</span>
            <span className="sidebarListItemText">ใใใฏใใผใฏ</span>
          </li>
          <li className="sidebarListItem">
            {/* <Person className="sidebarIcon" /> */}
            <Link
              to="/profile/้ซๆจใใฃใชใใใใใฎใ"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="sidebarListItemTex">๐ค</span>
              <span className="sidebarListItemText">ใใญใใฃใผใซ</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            {/* <Settings className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">๐ง</span>
            <span className="sidebarListItemText">่จญๅฎ</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <SidebarFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
