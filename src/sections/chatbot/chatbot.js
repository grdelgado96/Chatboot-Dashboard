import { Card, TextField, Grid, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [inputTextValue, setInputTextValue] = useState("");
  const listRef = useRef();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputTextChange = (e) => {
    setInputTextValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const question = {
      question: inputValue,
      context: inputTextValue,
    };

    // Adding loading message
    setMessages([
      ...messages,
      { text: inputValue, user: "user" },
      { text: "Loading...", user: "bot" },
    ]);

    try {
      const answer = await answerQuestion(question);
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        const loadingMessageIndex = updatedMessages.findIndex(
          (message) => message.text === "Loading..."
        );

        if (loadingMessageIndex !== -1) {
          // Replace loading message for real message
          updatedMessages[loadingMessageIndex] = { text: answer.body, user: "bot" };
        }

        return updatedMessages;
      });
    } catch (error) {
      console.error("Error processing response:", error);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error processing response", user: "bot" },
      ]);
    } finally {
      // Reset input value
      setInputValue("");
      //update scroll to bottom
      scrollToBottom();
    }
  };

  const answerQuestion = async (question) => {
    try {
      const response = await fetch(
        "https://ooqxnuffn0.execute-api.eu-central-1.amazonaws.com/chatbot123456789987654231123456",
        {
          method: "POST",
          body: JSON.stringify(question),
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );
      const answer = await response.json();
      scrollToBottom();

      return answer;
    } catch (error) {
      console.error("Error processing response:", error);
      return { body: "Error processing response" };
    }
  };

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Card>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h5" style={{ marginBottom: "20px", color: "#333" }}>
          ChatBot
        </Typography>
        <List
          ref={listRef}
          style={{ padding: "10px", height: "400px", overflowY: "auto", marginBottom: "20px" }}
        >
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                {message.user === "user" ? (
                  <Box
                    component="img"
                    src={"assets/avatars/avatar-jane-rotanson.png"}
                    sx={{
                      borderRadius: 1,
                      height: 48,
                      width: 48,
                    }}
                  />
                ) : (
                  <Box
                    component="img"
                    src={"/assets/BotAvatar.png"}
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
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                value={inputValue}
                onChange={handleInputChange}
                label="Type here..."
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                value={inputTextValue}
                onChange={handleInputTextChange}
                label="Type context here..."
                required
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button type="submit" variant="text" color="primary" endIcon={<SendRoundedIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Card>
  );
};
