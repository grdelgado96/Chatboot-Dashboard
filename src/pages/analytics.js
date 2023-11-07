import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { BarChart } from "src/sections/analytics/barChart";
import { LineChart } from "src/sections/analytics/lineChart";
import LinePlot from "src/sections/analytics/linePlot";
import * as d3 from "d3";
import { useState } from "react";
import PieChart from "src/sections/analytics/pieChart";
const Page = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));
  const dataPieChart = [30, 20, 50,40,5,45,10];
  function onMouseMove(event) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }
  return (
    <>
      <Head>
        <div>
          <p>{t("analytics")}</p>
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
              <Grid container spacing={10}>
                <Grid xs={12} md={6} lg={6}>
                  <BarChart sx={{ height: "100%" }}/>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                  <LineChart sx={{ height: "100%" }}/>
                </Grid>
                <Grid xs={12} md={6} lg={6} onMouseMove={onMouseMove}>
                  <LinePlot sx={{ height: "100%" }} data={data} />
                </Grid>
                <Grid xs={12} md={6} lg={6} >
                  <PieChart sx={{ height: "100%" }} data={dataPieChart} width={200} height={200} radius={80}/>
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
