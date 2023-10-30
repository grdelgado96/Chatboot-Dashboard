import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import React, { useState } from "react";
import Dropzone from "src/sections/uploadDocs/dropzone";
import FileList from "src/sections/uploadDocs/file-list";

const Page = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  return (
    <>
      <Head>
        <title>Upload Docs</title>
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
              <Dropzone onDrop={handleDrop} />
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <FileList
                sx={{ height: "100%" }}
                files={uploadedFiles}
                onRemoveFile={handleRemoveFile}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
