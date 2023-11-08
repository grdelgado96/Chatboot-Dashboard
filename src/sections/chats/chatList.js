import DeleteIcon from "@mui/icons-material/Delete";
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
  ListItemAvatar,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
export const ChatList = (props) => {
  const { chats = [] } = props;
  const { t } = useTranslation();

  const handleListItemClick = (index) => {
    props.onChatItemClick(index);
    console.log(index);
  };

  return (
    <Card>
      <CardHeader title={t("titles.chats")} />

      <List style={{ overflow: "auto" }}>
        {chats.map((chat, index) => {
          const hasDivider = index < chats.length - 1;
          return (
            <ListItem key={index} divider={hasDivider} onClick={() => handleListItemClick(index)}>
              <ListItemAvatar>
                <Box
                  //component="img"
                  //src={image}
                  sx={{
                    borderRadius: 1,
                    backgroundColor: "neutral.200",
                    height: 48,
                    width: 48,
                  }}
                ></Box>
              </ListItemAvatar>
              <ListItemText
                primary={chat.title}
                primaryTypographyProps={{ variant: "subtitle1" }}
                secondary={`Date: ${chat.date} Time: ${chat.time}`}
                secondaryTypographyProps={{ variant: "body2" }}
              />
              {/* <CardActions sx={{ justifyContent: "flex-end" }}>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </CardActions> */}
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};
