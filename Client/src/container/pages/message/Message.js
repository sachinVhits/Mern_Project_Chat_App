import React from "react";
import Index from "../../../component/Index";
import "../message/message.css";
import SendIcon from "@mui/icons-material/Send";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
const Message = () => {
  return (
    <>
      <Index.Box className="main-message">
        <Index.Box className="message-head">
          <Index.Box className="message-box-main">
            <Index.Box className="new-message">
              <Index.Box>
                <Index.Typography className="right-main-message-box">
                  sender
                </Index.Typography>
              </Index.Box>
            </Index.Box>
            <Index.Box className="main-sendr-user">
              <Index.Box className="main-left-box">
                <Index.Typography className="left-main-message-box">
                  reciver
                </Index.Typography>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
      <Index.Box className="main-message-sender">
        <Index.Box className="box-2-main-chat-box">
          <Index.Box className="menu-dashboard-icon">
            <Index.WidgetsIcon className="menu-dashboard-icon-css" />
          </Index.Box>
          <Index.Box className="main-text-message-box-cs">
            <Index.Box className="main-text-type">
              <Index.TextField
                className="main-type-messsage"
                placeholder="Type your message"
              />
            </Index.Box>
            <Index.Box className="main-send-icon-file">
              <Index.Box className="send-file-icon">
                <InsertLinkIcon />
              </Index.Box>
              <Index.Box>
                <SendIcon />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default Message;
