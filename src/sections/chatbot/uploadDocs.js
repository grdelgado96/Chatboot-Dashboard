import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
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
} from "@mui/material";
import { useState } from "react";
export const UploadDocs = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
 
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

    
    selectedFiles.forEach((file, index) => {
      //  console.log(`Archivo ${index + 1}:`, file.name);
      });
  };

  return (
    <Card>
      <CardHeader title="Documents in use:" />
      {selectedFiles.length > 0 && (
      <List style={{overflow:'auto',height: "400px"}}>
        {selectedFiles.map((file, index) => {
          return (
            <ListItem key={index}>
              <ListItemText primary={file.name} />
              <CardActions sx={{ justifyContent: "flex-end" }}>
                {/* <Button
                  color="inherit"
                  endIcon={
                    <SvgIcon fontSize="small">
                      <DeleteOutlineRoundedIcon />
                    </SvgIcon>
                  }
                  size="small"
                ></Button> */}
                <ListItemSecondaryAction>
                    <IconButton edge="end" 
                    aria-label="delete" onClick={() => handleDeleteFile(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
              </CardActions>
            </ListItem>
          );
        })}
      </List>
      )}

      <Divider />
      <CardActions>
        <input type="file" 
        multiple onChange={handleFileChange}></input>
        <Button
          fullWidth
          variant="text"
          endIcon={<DriveFolderUploadRoundedIcon></DriveFolderUploadRoundedIcon>}
          onClick={handleUpload}
        >
          Upload File
        </Button>
      </CardActions>
    </Card>
  );
};
