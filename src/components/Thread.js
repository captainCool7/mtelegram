import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Thread.css";
import { MoreHoriz } from "@material-ui/icons";
function Thread() {
  return (
    <div className="thread">
      <div className="thread__header">
        <div className="thread__header__contents">
          <Avatar />
          <div className="thread__header__content__info">
            <h4>ThreadName</h4>
            <h5>Last Seen</h5>
          </div>
        </div>
        <IconButton>
          <MoreHoriz className="thread__header__details" />
        </IconButton>
      </div>
    </div>
  );
}
export default Thread;
