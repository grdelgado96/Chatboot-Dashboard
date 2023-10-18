import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ChatBot } from "src/sections/chatbot/chatbot"
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import Head from 'next/head';
import { UploadDocs } from 'src/sections/chatbot/uploadDocs';


const Page = ()=>
{
return(
    <>
    <Head>
      <title>ChatBot</title>
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
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
                <UploadDocs/>
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                <ChatBot />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </> 
    
);
};
Page.getLayout = (page) => (<DashboardLayout>{page}</DashboardLayout>);

export default Page;