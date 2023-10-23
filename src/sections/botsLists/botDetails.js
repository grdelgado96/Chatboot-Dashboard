import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";

export const BotDetails = (props) => {
  const { docs = [], sx, bots = [], botNameDetail } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Bot Details" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Document Name</TableCell>
                <TableCell>Bots</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {docs.map((doc) => {
                if(doc.bots.find((element)=>element === botNameDetail)){
                return( <TableRow hover 
                key={doc.id}>
                    <TableCell>{doc.name}</TableCell>
                    <TableCell>
                      {doc.bots.map((bot,index) => {
                        return <SeverityPill key={index} 
                        color={"success"}>{bot}</SeverityPill>;
                      })}
                    </TableCell>
                  </TableRow>);
                   
                }
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
    </Card>
  );
};

BotDetails.prototype = {
  docs: PropTypes.array,
  sx: PropTypes.object,
};
