import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import Link from "next/link";

let image = "/assets/avatars/BotAvatar.png";
export const BotsList = (props) => {
  const { bots = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Bots List" />
      <List>
        {bots.map((bot, index) => {
          const hasDivider = index < bots.length - 1;
          return (
            <Link href={`/bots_list/${bot.id}`}>
              <ListItem divider={hasDivider} key={bot.id}>
                <ListItemAvatar>
                  {image ? (
                    <Box
                      component="img"
                      src={image}
                      sx={{
                        borderRadius: 1,
                        height: 48,
                        width: 48,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        borderRadius: 1,
                        backgroundColor: "neutral.200",
                        height: 48,
                        width: 48,
                      }}
                    ></Box>
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={bot.name}
                  primaryTypographyProps={{ variant: "subtitle1" }}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
    </Card>
  );
};

BotsList.prototype = {
  bots: PropTypes.array,
  sx: PropTypes.object,
};

// (
//   <ListItem divider={hasDivider}
//   key={bot.id}>
//     <ListItemAvatar>
//       {image ? (
//         <Box
//           component="img"
//           src={image}
//           sx={{
//             borderRadius: 1,
//             height: 48,
//             width: 48,
//           }}
//         />
//       ) : (
//         <Box
//           sx={{
//             borderRadius: 1,
//             backgroundColor: "neutral.200",
//             height: 48,
//             width: 48,
//           }}
//         ></Box>
//       )}
//     </ListItemAvatar>
//     <ListItemText primary={bot.name}
//     primaryTypographyProps={{ variant: "subtitle1" }} />

//     <CardActions sx={{ justifyContent: "flex-end" }}>
//       {/* <Button
//         color="inherit"
//         endIcon={
//           <SvgIcon fontSize="small">
//             <ArrowRightIcon />
//           </SvgIcon>
//         }
//         size="small"
//         variant="text"
//         onClick={() => props.onShowDetails(bot.name)}
//       >
//         Details
//       </Button> */}
//       <Link href={`/bots_list/${bot.id}`}>Details</Link>
//     </CardActions>
//   </ListItem>
// );
