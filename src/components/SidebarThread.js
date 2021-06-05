import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarThread.css";
function SidebarThread() {
  return (
    <div className="sidebarThread">
      <Avatar />
      <div className="sidebarThread__details">
        <h3>Thread Name</h3>
        <p>This is the message</p>
        <small className="sidebarThread__timestamp">timestamp</small>
      </div>
    </div>
  );
}

export default SidebarThread;
