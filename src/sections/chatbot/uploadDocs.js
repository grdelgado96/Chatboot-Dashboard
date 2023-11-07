import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import {
  Button,
  Card,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  CardHeader,
  ListItemSecondaryAction,
  IconButton,
  Icon,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export const UploadDocs = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { t } = useTranslation();
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };
  const handleDeleteFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };
  const handleUpload = () => {
    // Here goes the logic for send the files to the API
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    setSelectedFiles([]);
    selectedFiles.forEach((file, index) => {
      //  console.log(`Archivo ${index + 1}:`, file.name);
    });
  };

  return (
    <Card>
      <CardHeader title={t("uploadDocHeader")} />
      {(selectedFiles.length > 0 || uploadedFiles.length > 0) && (
        <List style={{ overflow: "auto", maxHeight: "400px" }}>
          {selectedFiles.map((file, index) => {
            return (
              <ListItem key={index}>
                <ListItemText primary={file.name} />
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteFile(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </CardActions>
              </ListItem>
            );
          })}
          {uploadedFiles.map((file, index) => {
            return (
              <ListItem key={index}>
                <ListItemText primary={file.name} />
                <Icon sx={{ justifyContent: "flex-end" }} edge="end" aria-label="uploaded">
                  <CheckIcon color="success" />
                </Icon>
              </ListItem>
            );
          })}
        </List>
      )}
      <Divider />
      <CardActions>
        <input type="file" multiple onChange={handleFileChange}></input>
        <Button
          fullWidth
          variant="text"
          endIcon={<DriveFolderUploadRoundedIcon></DriveFolderUploadRoundedIcon>}
          onClick={handleUpload}
        >
          {t("uploadFileButton")}
        </Button>
      </CardActions>
    </Card>
  );
};
