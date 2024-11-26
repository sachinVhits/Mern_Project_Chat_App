import React, { useState, useRef } from "react";
import Index from "../../../component/Index";
import "../message/message.css";
const Message = ({ userInfo }) => {
  const [message, setMessage] = useState("");
  const [showAllImages, setShowAllImages] = useState(false);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageClick = (id) => {
    setShowAllImages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const chatArray = [
    {
      _id: 1,
      timestamp: "2024-11-01T09:00:00Z",
      image: [
        Index.Png.nature2Image,
        Index.Png.natureImage,
        Index.Png.nature2Image,
        Index.Png.nature2Image,
      ],
    },
    {
      _id: 2,
      to: "I'm good, thanks! What about you?",
      timestamp: "2024-11-01T09:02:00Z",
    },
    {
      _id: 3,
      from: "I'm doing great! Working on a new project.",
      timestamp: "2024-11-01T09:05:00Z",
    },
    {
      _id: 4,
      from: "That’s awesome! Let me know if I can help.",
      timestamp: "2024-11-01T09:07:00Z",
    },
    {
      _id: 5,
      to: "Sounds good!",
      timestamp: "2024-11-02T10:15:00Z",
    },
    {
      _id: 6,
      from: "What have you been up to?",
      timestamp: "2024-11-02T10:20:00Z",
    },
    {
      _id: 7,
      to: "Just working on some new tech stuff. You?",
      timestamp: "2024-11-02T10:25:00Z",
    },
    {
      _id: 8,
      from: "Same here, trying to learn some new frameworks.",
      timestamp: "2024-11-02T10:30:00Z",
    },
    {
      _id: 9,
      to: "That’s great! Which frameworks are you learning?",
      timestamp: "2024-11-02T10:35:00Z",
    },
    {
      _id: 10,
      from: "I’m diving into React and Node.js more deeply.",
      timestamp: "2024-11-02T10:40:00Z",
      image: [
        Index.Png.nature2Image,
        Index.Png.natureImage,
        Index.Png.nature2Image,
        Index.Png.nature2Image,
      ],
    },
    {
      _id: 11,
      to: "Nice! I’m focusing on Angular and Express.",
      timestamp: "2024-11-02T10:45:00Z",
    },
    {
      _id: 12,
      from: "Cool, let me know if you need any help with Node.js!",
      timestamp: "2024-11-02T10:50:00Z",
    },
    {
      _id: 13,
      to: "Definitely! I’ll reach out.",
      timestamp: "2024-11-02T10:55:00Z",
    },
    {
      _id: 14,
      from: "I was also thinking of learning some more about databases.",
      timestamp: "2024-11-03T11:00:00Z",
    },
    {
      _id: 15,
      to: "Oh, great! Which database are you looking into?",
      timestamp: "2024-11-03T11:05:00Z",
    },
    {
      _id: 16,
      from: "Maybe MongoDB or PostgreSQL.",
      timestamp: "2024-11-03T11:10:00Z",
    },
    {
      _id: 17,
      to: "Nice choices! I’ve worked with both of those. They’re really powerful.",
      timestamp: "2024-11-03T11:15:00Z",
    },
    {
      _id: 18,
      from: "I’m leaning more towards MongoDB, actually.",
      timestamp: "2024-11-03T11:20:00Z",
    },
    {
      _id: 19,
      to: "Sounds good! MongoDB is really great for scalability.",
      timestamp: "2024-11-03T11:25:00Z",
    },
    {
      _id: 20,
      from: "Yeah, that’s what I’ve heard. It’s really flexible too.",
      timestamp: "2024-11-03T11:30:00Z",
    },
    {
      _id: 21,
      to: "Exactly! And the document-based model makes it easy to work with.",
      timestamp: "2024-11-03T11:35:00Z",
    },
    {
      _id: 22,
      from: "I’ll look more into it. Thanks for the advice!",
      timestamp: "2024-11-03T11:40:00Z",
    },
    {
      _id: 23,
      to: "Anytime! Let me know if you need help with anything.",
      timestamp: "2024-11-03T11:45:00Z",
    },
    {
      _id: 24,
      from: "Will do! Take care!",
      timestamp: "2024-11-03T11:50:00Z",
    },
    {
      _id: 25,
      to: "You too, have a great day!",
      timestamp: "2024-11-03T11:55:00Z",
    },
    {
      _id: 26,
      from: "Thanks, you as well!",
      timestamp: "2024-11-03T12:00:00Z",
    },
    {
      _id: 27,
      to: "Catch up soon!",
      timestamp: "2024-11-03T12:05:00Z",
    },
    {
      _id: 28,
      from: "Looking forward to it!",
      timestamp: "2024-11-03T12:10:00Z",
    },
    {
      _id: 29,
      to: "Alright, see you later!",
      timestamp: "2024-11-03T12:15:00Z",
    },
    {
      _id: 30,
      from: "Bye for now!",
      timestamp: "2024-11-03T12:20:00Z",
    },
    {
      _id: 31,
      to: "Bye!",
      timestamp: "2024-11-03T12:25:00Z",
    },
    {
      _id: 32,
      from: "See you later!",
      timestamp: "2024-11-03T12:30:00Z",
    },
    {
      _id: 33,
      to: "Take care!",
      timestamp: "2024-11-03T12:35:00Z",
    },
    {
      _id: 34,
      from: "You too!",
      timestamp: "2024-11-03T12:40:00Z",
    },
    {
      _id: 35,
      to: "Alright, I’ve got to run now.",
      timestamp: "2024-11-03T12:45:00Z",
    },
    {
      _id: 36,
      from: "Okay, see you soon!",
      timestamp: "2024-11-03T12:50:00Z",
    },
    {
      _id: 37,
      to: "Later!",
      timestamp: "2024-11-03T12:55:00Z",
    },
    {
      _id: 38,
      from: "See you soon!",
      timestamp: "2024-11-03T13:00:00Z",
    },
    {
      _id: 39,
      to: "Take care of yourself!",
      timestamp: "2024-11-03T13:05:00Z",
    },
    {
      _id: 40,
      from: "You too! Bye for now.",
      timestamp: "2024-11-03T13:10:00Z",
    },
  ];

  if (!userInfo) {
    return (
      <Index.Box className="no-message-box">
        <Index.Typography className="no-message-text">
          Message not found
        </Index.Typography>
      </Index.Box>
    );
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };
  return (
    <>
      <Index.Box className="main-message">
        <Index.Box className="message-head">
          <Index.Box className="message-box-main">
            <Index.Box className="main-box-date">
              <Index.Box className="date">Today</Index.Box>
            </Index.Box>

            {chatArray.map((msg, index) => {
              const isSender = msg.from;
              const isImagesExpanded = showAllImages[msg._id] || false;

              return (
                // <Index.Box
                //   key={index}
                //   className={`message-container ${
                //     isSender ? "sender" : "receiver"
                //   }`}
                // >
                //   {console.log(msg.image)}
                //   {msg.image.map(()=>{

                //   }) ? (
                //     <Index.Box className="message-image">
                //       <img
                //         src={msg.image}
                //         alt="Message Attachment"
                //         className="image"
                //       />
                //     </Index.Box>
                //   ) : (
                //     <Index.Box className="message-box">
                //       <Index.Box
                //         className={
                //           isSender ? "sender-message" : "receiver-message"
                //         }
                //       >
                //         <Index.Typography className="message-text">
                //           {msg.from || msg.to}
                //         </Index.Typography>
                //       </Index.Box>

                //       <Index.Box className={isSender ? "test-date" : ""}>
                //         <Index.Typography className="message-time-date">
                //           {new Date(msg.timestamp).toLocaleTimeString([], {
                //             hour: "2-digit",
                //             minute: "2-digit",
                //           })}
                //         </Index.Typography>
                //       </Index.Box>
                //     </Index.Box>
                //   )}
                // </Index.Box>

                // <Index.Box
                //   key={index}
                //   className={`message-container ${
                //     isSender ? "sender" : "receiver"
                //   }`}
                // >
                //   {Array.isArray(msg.image) && msg.image.length > 0 ? (
                //     <Index.Box className="message-image">
                //       {msg.image.map((image, imgIndex) => (
                //         <img
                //           key={imgIndex}
                //           src={image}
                //           alt="Message Attachment"
                //           // className="image"
                //           className={`image ${
                //             imgIndex === 1 && msg.image.length > 2
                //               ? "light-opacity"
                //               : ""
                //           }`}
                //         />
                //       ))}
                //     </Index.Box>
                //   ) : (
                //     <Index.Box className="message-box">
                //       <Index.Box
                //         className={
                //           isSender ? "sender-message" : "receiver-message"
                //         }
                //       >
                //         <Index.Typography className="message-text">
                //           {msg.from || msg.to}
                //         </Index.Typography>
                //       </Index.Box>
                //       <Index.Box
                //         className={isSender ? "test-date" : "test-reciver-date"}
                //       >
                //         <Index.Box className="date-show-chat-box">
                //           Today
                //         </Index.Box>
                //         <Index.Box className="main-box-time-show">
                //           <Index.Typography className="message-time-date">
                //             {new Date(msg.timestamp).toLocaleTimeString([], {
                //               hour: "2-digit",
                //               minute: "2-digit",
                //             })}
                //           </Index.Typography>
                //         </Index.Box>
                //       </Index.Box>
                //     </Index.Box>
                //   )}
                // </Index.Box>

                // <Index.Box
                //   key={index}
                //   className={`message-container ${
                //     isSender ? "sender" : "receiver"
                //   }`}
                // >
                //   {Array.isArray(msg.image) && msg.image.length > 0 ? (
                //     <Index.Box className="message-image">
                //       {msg.image.slice(0, 2).map((image, imgIndex) => (
                //         <Index.Box key={imgIndex} className="image-container">
                //           <img
                //             src={image}
                //             alt="Message Attachment"
                //             className={`image ${
                //               imgIndex === 1 && msg.image.length > 2
                //                 ? "light-opacity"
                //                 : ""
                //             }`}
                //           />
                //         </Index.Box>
                //       ))}
                //       {msg.image.length > 2 && !showAllImages && (
                //         <Index.Box
                //           className="image-count"
                //           onClick={handleImageClick}
                //         >
                //           +{msg.image.length - 2} more
                //         </Index.Box>
                //       )}
                //     </Index.Box>
                //   ) : (
                //     <Index.Box className="message-box">
                //       <Index.Box
                //         className={
                //           isSender ? "sender-message" : "receiver-message"
                //         }
                //       >
                //         <Index.Typography className="message-text">
                //           {msg.from || msg.to}
                //         </Index.Typography>
                //       </Index.Box>
                //       <Index.Box
                //         className={isSender ? "test-date" : "test-reciver-date"}
                //       >
                //         <Index.Box className="date-show-chat-box">
                //           Today
                //         </Index.Box>
                //         <Index.Box className="main-box-time-show">
                //           <Index.Typography className="message-time-date">
                //             {new Date(msg.timestamp).toLocaleTimeString([], {
                //               hour: "2-digit",
                //               minute: "2-digit",
                //             })}
                //           </Index.Typography>
                //         </Index.Box>
                //       </Index.Box>
                //     </Index.Box>
                //   )}
                // </Index.Box>

                <Index.Box
                  key={index}
                  className={`message-container ${
                    isSender ? "sender" : "receiver"
                  }`}
                >
                  {Array.isArray(msg.image) && msg.image.length > 0 ? (
                    <Index.Box className="message-image">
                      <Index.Box className="image-row">
                        {msg.image.slice(0, 2).map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            className={`image-wrapper ${
                              imageIndex === 1 &&
                              msg.image.length > 2 &&
                              !isImagesExpanded
                                ? "blurred"
                                : ""
                            }`}
                            onClick={
                              imageIndex === 1 &&
                              msg.image.length > 2 &&
                              !isImagesExpanded
                                ? () => handleImageClick(msg._id)
                                : null
                            }
                          >
                            <img
                              src={image}
                              alt={`Message Attachment ${imageIndex + 1}`}
                              className="image-chat"
                            />
                            {imageIndex === 1 &&
                              msg.image.length > 2 &&
                              !isImagesExpanded && (
                                <p className="image-overlay">
                                  +{msg.image.length - 2}
                                </p>
                              )}
                          </div>
                        ))}
                      </Index.Box>

                      {isImagesExpanded && (
                        <Index.Box className="image-grid">
                          {msg.image.slice(2).map((image, imageIndex) => (
                            <img
                              key={imageIndex + 2}
                              src={image}
                              alt={`Image ${imageIndex + 3}`}
                              className="image-chat"
                            />
                          ))}
                        </Index.Box>
                      )}
                    </Index.Box>
                  ) : (
                    <Index.Box className="message-box">
                      <Index.Box
                        className={
                          isSender ? "sender-message" : "receiver-message"
                        }
                      >
                        <Index.Typography className="message-text">
                          {msg.from || msg.to}
                        </Index.Typography>
                      </Index.Box>
                      <Index.Box
                        className={isSender ? "test-date" : "test-reciver-date"}
                      >
                        <Index.Box className="date-show-chat-box">
                          Today
                        </Index.Box>
                        <Index.Box className="main-box-time-show">
                          <Index.Typography className="message-time-date">
                            {new Date(msg.timestamp).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </Index.Typography>
                        </Index.Box>
                      </Index.Box>
                    </Index.Box>
                  )}
                </Index.Box>
              );
            })}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Index.Box>
            <Index.Box className="main-send-icon-file">
              <Index.Box className="send-file-icon">
                <Index.AttachmentIcon onClick={handleIconClick} />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Index.Box>
              <Index.Box onClick={handleSendMessage}>
                <Index.SendIcon />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default Message;
