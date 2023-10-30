import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { BotsList } from "src/sections/botsLists/botsList";

let DUMMY_BOTS = [
  {
    id: "11",
    name: "Bot 1",
    docs: ["Doc 1", "Doc 2", "Doc 3", "Doc 4"],
  },
  {
    id: "12",
    name: "Bot 2",
    docs: ["Doc 1", "Doc 3", "Doc 4"],
  },
  {
    id: "13",
    name: "Bot 3",
    docs: ["Doc 1", "Doc 2", "Doc 3"],
  },
  {
    id: "14",
    name: "Bot 4",
    docs: ["Doc 2", "Doc 3", "Doc 4"],
  },
];
const Page = () => {
  return (
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
            <Grid xs={12} md={12} lg={12}>
              <BotsList bots={DUMMY_BOTS} sx={{ height: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
