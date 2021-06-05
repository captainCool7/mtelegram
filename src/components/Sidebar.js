import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import BorderColorOutlineIcon from "@material-ui/icons/BorderColor";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarThread from "./SidebarThread";
import "./Sidebar.css";
import {
  PhoneOutlined,
  QuestionAnswerOutlined,
  Settings,
} from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <SearchIcon className="sideabar_searchIcon" />
          <input placeholder="Search" className="sidebar__input"></input>
        </div>
        <IconButton variant="outlined" id="sidebar__button">
          <BorderColorOutlineIcon />
        </IconButton>
      </div>
      <div className="sidebar__threads">
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
        <SidebarThread />
      </div>
      <div className="sidebar__bottom">
        <Avatar className="sidebar__bottom__avatar" />
        <IconButton>
          <PhoneOutlined />
        </IconButton>
        <IconButton>
          <QuestionAnswerOutlined />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
