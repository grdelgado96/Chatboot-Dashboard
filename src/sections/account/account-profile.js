import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { styled } from '@mui/material/styles';
import { useState } from "react";
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
//need to change when authentication is complete
const user = {
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  timezone: "GTM-7",
};

export const AccountProfile = () => {
  const auth = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload=(event)=>{
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    auth.user.avatar = imageUrl;
    console.log(auth.user.avatar)
   //add logic to upload image to server
  };
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={selectedImage || auth.user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80,
            }}
          />
          <Typography gutterBottom variant="h5">
            {auth.user.name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.city} {user.country}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth component="label" variant="text" >
          Upload picture
          <VisuallyHiddenInput type="file" accept=".jpg, .jpeg, .png" onChange={handleUpload}/>
        </Button>
      </CardActions>
    </Card>
  );
};
