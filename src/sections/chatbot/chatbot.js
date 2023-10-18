import {
  Card,
  CardContent,
  Divider,
  TextField,
  Grid,
  CardActions,
  Button,
  Paper,
  CardHeader,
  Typography,
} from "@mui/material";
//import * as React from "react";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useCallback } from "react";
let DUMMY_CHAT = [
  {
    primary: "Bot",
    secondary: "Hello Emma. Is there something in particular we can help you with?",
    person: "/assets/BotAvatar.png",
  },
  {
    primary: "Emma",
    secondary: "I need the latest sales report ",
    person: "/assets/avatars/avatar-seo-hyeon-ji.png",
  },
  {
    primary: "Bot",
    secondary: "ok, do you need the full report or just the summary?",
    person: "/assets/BotAvatar.png",
  },
  {
    primary: "Emma",
    secondary: "The full report",
    person: "/assets/avatars/avatar-seo-hyeon-ji.png",
  },
];

// export const ChatBot = () => {
//   const [message, setMessage] = React.useState("");
//   const messageHandler =(event)=>{
//     setMessage(event.target.value);
//     console.log(message);
//   };
//   return (
//     <>
//       <Card>
//         <CardContent sx={{ pt: 0 }}>
//           <Box sx={{ m: -1.5 }}>
//             <List>
//               {DUMMY_CHAT.map(({ primary, secondary, person }, index) => (
//                 <ListItem key={index + person}>
//                   <ListItemAvatar>
//                     <Avatar alt="Profile Picture" src={person} />
//                   </ListItemAvatar>
//                   <ListItemText primary={primary} secondary={secondary} />
//                 </ListItem>
//               ))}
//             </List>
//             <Divider />

//             <BottomNavigation showLabels>
//               <TextField
//                 fullWidth
//                 label="Type here..."
//                 name="message"
//                 value={message}
//                 onChangeCapture={messageHandler}
//                // onChange={messageHandler}
//               ></TextField>
//               <BottomNavigationAction label="Send" icon={<SendRoundedIcon />} />
//             </BottomNavigation>
//           </Box>
//         </CardContent>
//       </Card>
//     </>
//   );
// };

export const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Agrega el nuevo mensaje al estado
    setMessages([...messages, { text: inputValue, user: "user" }]);
    // Limpia el campo de entrada
    setInputValue("");
  };

  return (
    <Card>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h5" style={{ marginBottom: "20px", color: "#333" }}>
          ChatBot
        </Typography>
        <List style={{ padding: "10px", height: "400px", overflowY: "auto", marginBottom: "20px" }}>
          {messages.map((message, index) => (
            <ListItem key={index}>
                <ListItemAvatar>
                {message.user === 'user' ? (
                  <Box
                    component="img"
                    src={'assets/avatars/avatar-jane-rotanson.png'}
                    sx={{
                      borderRadius: 1,
                      height: 48,
                      width: 48,
                    }}
                  />
                ) : (
                  <Box
                  component="img"
                    src={'/assets/BotAvatar.png'}
                    sx={{
                      borderRadius: 1,
                      backgroundColor: "neutral.200",
                      height: 48,
                      width: 48,
                    }}
                  ></Box>
                )}
              </ListItemAvatar>
              <ListItemText>
                <strong>{message.user}:</strong> {message.text}
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", display: "flex", alignItems: "center" }}
        >
          <TextField
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
            label="Type here..."
          />
          <Button type="submit" variant="text" color="primary" endIcon={<SendRoundedIcon />}>
            Send
          </Button>
        </form>
      </Paper>
    </Card>
  );
};
