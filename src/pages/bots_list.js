import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { BotsList } from "src/sections/botsLists/botsList";
import { BotDetails } from "src/sections/botsLists/botDetails";
import { useState } from "react";
let DUMMY_DOCS = [
    {
      id: Math.random().toString(),
      name: "Doc 1",
      bots: ["Bot 1", "Bot 2", "Bot3"],
    },
    {
      id: Math.random().toString(),
      name: "Doc 2",
      bots: ["Bot 3", "Bot 4"],
    },
    {
      id: Math.random().toString(),
      name: "Doc 3",
      bots: ["Bot 2", "Bot 3"],
    },
    {
      id: Math.random().toString(),
      name: "Doc 4",
      bots: ["Bot 1", "Bot 2", "Bot3", "Bot 4"],
    },
  ];
  let DUMMY_BOTS = [
    {
      id: Math.random().toString(),
      name: "Bot 1",
    },
    {
      id: Math.random().toString(),
      name: "Bot 2",
    },
    {
      id: Math.random().toString(),
      name: "Bot 3",
    },
    {
      id: Math.random().toString(),
      name: "Bot 4",
    },
  ]
const Page = () => {
    const [botName, setBotName]= useState("");
    function showDetailsHandler (name) {
   setBotName(name);
   console.log(name);
   
   };
    
    return(
  <>
    <Head>
      <title>Bots List</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={4}>
            <BotsList
              bots={DUMMY_BOTS}
              sx={{ height: "100%" }}
              onShowDetails={showDetailsHandler}
            />
          </Grid>
          <Grid xs={12} md={12} lg={8}>
            <BotDetails
              docs= {DUMMY_DOCS}
              sx={{ height: "100%" }}
              bots={DUMMY_BOTS}
              botNameDetail= {botName}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
