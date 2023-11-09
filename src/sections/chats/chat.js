import { Card, TextField, Grid, Button, Paper, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { useAuth } from "src/hooks/use-auth";
import { useTranslation } from "react-i18next";

export const Chat = (props) => {
  const {chats=[],  selectedChatIndex} = props;
  const {t}= useTranslation();
 const selectedChat= chats[selectedChatIndex];
 const auth = useAuth();
  return (
    <Card>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h5" style={{ marginBottom: "20px", color: "#333" }}>
          {selectedChat.title}
        </Typography>
        <List
          
          style={{ padding: "10px", overflowY: "auto", marginBottom: "20px" }}
        >
          {selectedChat.messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                {message.user === 'user'? (
                  <Box
                    component="img"
                    src={auth.user.avatar}
                    sx={{
                      borderRadius: 1,
                      height: 48,
                      width: 48,
                    }}
                  />
                ) : (
                  <Box
                    component="img"
                    src={"/assets/avatars/BotAvatar.png"}
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
                <strong>{(message.user === 'bot')? 'bot': auth.user.name}:</strong> {message.message}
              </ListItemText>
            </ListItem>
          ))}
        </List> 

     
      </Paper>
    </Card>
  );
};
