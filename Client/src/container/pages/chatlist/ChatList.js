import React from "react";
import Index from "../../../component/Index";
import "../chatlist/chatlist.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const ChatList = () => {
  const userMessages = [
    {
      userName: "Sachin",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Preeti",
      message: "Hello there!",
      time: "10:30 AM",
      isSeen: false,
    },
    {
      userName: "Durgesh",
      message: "How are you?",
      time: "10:35 AM",
      isSeen: true,
    },
    {
      userName: "Jagriti",
      message: "Good morning!",
      time: "10:40 AM",
      isSeen: false,
    },
    {
      userName: "Jatin",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Nilesh",
      message: "Good morning!",
      time: "10:40 AM",
      isSeen: false,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: false,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: false,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: false,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: false,
    },

    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
  ];

  return (
    <Index.Box className="main-chat-list-box">
      <Index.List className="list-container">
        {userMessages.map((msg, index) => (
          <Index.ListItem className="list-item" key={index}>
            <Index.Box className="list-chat">
              <Index.ListItemAvatar>
                <Index.CardMedia
                  component="img"
                  className="main-card"
                  image={Index.Jpg.Avtar}
                />
              </Index.ListItemAvatar>
              <Index.Box className="chat-box">
                <Index.ListItemText
                  className="content-main"
                  primary={msg.userName}
                />
                <Index.ListItemText className="message-main">
                  {msg.message}
                </Index.ListItemText>
              </Index.Box>
            </Index.Box>
            <Index.Box className="tick-icon">
              <DoneAllIcon
                className="tick"
                style={{
                  color: msg.isSeen ? "blue" : "gray",
                }}
              />
            </Index.Box>
          </Index.ListItem>
        ))}
      </Index.List>
    </Index.Box>
  );
};

export default ChatList;
