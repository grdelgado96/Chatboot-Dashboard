import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";
import { useTranslation } from "react-i18next";
export const BotDetails = (props) => {
  const { sx, bots = [], id } = props;
  const {t}= useTranslation();
  return (
    <Card sx={sx}>
      <CardHeader title={t('documentListHeader')} />
      <List>
        {bots.map(
          (bot) =>
            bot.id === id &&
            bot.docs.map((doc, index) => (
              <ListItem divider={index < bot.docs.length - 1} key={index}>
                <ListItemText primary={doc} primaryTypographyProps={{ variant: "subtitle1" }} />
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button>{t('removeButton')}</Button>
                </CardActions>
              </ListItem>
            ))
        )}
      </List>
    </Card>
  );
};

BotDetails.prototype = {
  docs: PropTypes.array,
  sx: PropTypes.object,
};

{
  /* show data in a table
<Card sx={sx}>
      <CardHeader title="Bot Details" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Document List</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bots.map((bot) => {
                if (bot.id === id) {
                  return (
                    <TableRow hover key={bot.id}>
                      <TableCell>
                        {bot.docs.map((doc, index) => {
                          return (
                            <SeverityPill key={index} color={"success"}>
                              {doc}
                            </SeverityPill>
                            
                          );
                        })}
                      </TableCell>
                      <TableCell>
                      <Button variant="text" >
                        Remove
                      </Button>
                    </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody> 

          </Table>
        </Box>
      </Scrollbar>
      <Divider />
    </Card> */
}
