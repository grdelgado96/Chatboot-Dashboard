import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Checkbox,
  Card,
  CardHeader,
  Divider,
  FormControlLabel,
} from "@mui/material";

const FileList = (props) => {
  const { files, onRemoveFile, sx } = props;
  const [selectedBots, setSelectedBots] = useState([]);

  const handleRemoveSelectedBots = (index) => {
    const updatedBots = [...selectedBots];
    updatedBots.splice(index, 1);
    setSelectedBots(updatedBots);
    onRemoveFile(index);
  };

const handleBotCheckboxChange = (fileIndex, bot) => {
    const newSelectedBots = [...selectedBots];
    
    if (!newSelectedBots[fileIndex]) {
      newSelectedBots[fileIndex] = [];
    }

    if (newSelectedBots[fileIndex].includes(bot)) {
      newSelectedBots[fileIndex] = newSelectedBots[fileIndex].filter(
        (selectedBot) => selectedBot !== bot
      );
    } else {
      newSelectedBots[fileIndex] = [...newSelectedBots[fileIndex], bot];
    }

    setSelectedBots(newSelectedBots);
  };
  return (
    <Card sx={sx}>
    
        
          <CardHeader title="Uploaded files:" />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>File Name</TableCell>
                  <TableCell>Bots</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {files.map((file, index) => (
                  <TableRow key={index}>
                    <TableCell>{file.name}</TableCell>
                    <TableCell>
                      {["Bot1", "Bot2", "Bot3", "Bot4"].map((bot) => (
                        <FormControlLabel
                        key={bot}
                          control={
                            <Checkbox
                              
                              checked={selectedBots[index]?.includes(bot)}
                              onChange={() => handleBotCheckboxChange(index,bot)}
                            />
                          }
                          label={bot}
                        />
                      ))}
                    </TableCell>
                    <TableCell>
                      <Button variant="text" onClick={handleRemoveSelectedBots}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
        
      
    </Card>
  );
};

export default FileList;
