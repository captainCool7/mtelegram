import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Thread.css";
import { MoreHoriz } from "@material-ui/icons";
function Thread() {
  const [input, setInput] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();
    //firebase
    setInput("");
  };
  console.log(input);
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
      <div className="thread__messages"></div>
      <div className="thread__input">
        <input
          placeholder="Write a message...."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
}
export default Thread;
