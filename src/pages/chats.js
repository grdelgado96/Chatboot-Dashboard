import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Container, Stack, Unstable_Grid2 as Grid } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { ChatList } from "src/sections/chats/chatList";
import { Chat } from "src/sections/chats/chat";
import { useState } from "react";

let DUMMY_CHATS = [
  {
    date: "2023/11/01",
    time: "05:04",
    title: "title 1",
    messages: [
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
    ],
  },
  {
    date: "2023/10/30",
    time: "10:04",
    title: "title 2",
    messages: [
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
    ],
  },
  {
    date: "2023/10/25",
    time: "11:00",
    title: "title 3",
    messages: [
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
    ],
  },
  {
    date: "2023/10/24",
    time: "11:11",
    title: "title 4",
    messages: [
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
    ],
  },
  {
    date: "2023/10/10",
    time: "10:10",
    title: "title 5",
    messages: [
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
    ],
  },
  {
    date: "2023/10/01",
    time: "05:04",
    title: "title 6",
    messages: [
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
    ],
  },
  {
    date: "2023/09/30",
    time: "12:30",
    title: "title 7",
    messages: [
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
      { user: "bot", message: "random message" },
      { user: "user", message: "random message" },
    ],
  },
];
const Page = () => {
  const { t } = useTranslation();
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);

  const handleChatItemClick = (index) => {
    setSelectedChatIndex(index);
  };

  return (
    <>
      <Head>
        <div>
          <p>{t("titles.chats")}</p>
        </div>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 5,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <ChatList chats={DUMMY_CHATS} onChatItemClick={handleChatItemClick}></ChatList>
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <Chat chats={DUMMY_CHATS} selectedChatIndex={selectedChatIndex}></Chat>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
