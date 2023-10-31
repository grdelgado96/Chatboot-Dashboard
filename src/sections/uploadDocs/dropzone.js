import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
const Dropzone = ({ onDrop }) => {
  const {t}=useTranslation();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    noClick: true,
  });

  const handleButtonClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <Paper sx={{ p: 2, textAlign: "center", cursor: "pointer" }} {...getRootProps()}>
      <input {...getInputProps()} id="file-input" style={{ display: "none" }} />
      <Typography variant="body2">{t('dropzoneText')}</Typography>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={handleButtonClick}>
        {t('dropzoneButton')}
      </Button>
    </Paper>
  );
};

export default Dropzone;
