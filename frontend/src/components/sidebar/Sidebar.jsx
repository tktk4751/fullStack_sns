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
              <span className="sidebarListItemTex">🏠</span>
              <span className="sidebarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            {/* <Search className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">🔍</span>
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            {/* <Notifications className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">🔔</span>
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            {/* <MessageRounded className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">📩</span>
            <span className="sidebarListItemText">メール</span>
          </li>
          <li className="sidebarListItem">
            {/* <Bookmark className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">🔖</span>
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            {/* <Person className="sidebarIcon" /> */}
            <Link
              to="/profile/高木フィリップよしのり"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="sidebarListItemTex">🤖</span>
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            {/* <Settings className="sidebarIcon" /> */}
            <span className="sidebarListItemTex">🔧</span>
            <span className="sidebarListItemText">設定</span>
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
