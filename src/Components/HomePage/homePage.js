import React, { useState } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ProfileImgages from "../../assests/images/image.svg";
import { common } from "../common/common";
import AddLocationAltSharpIcon from "@mui/icons-material/AddLocationAltSharp";
import CompressIcon from "@mui/icons-material/Compress";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MedicationIcon from "@mui/icons-material/Medication";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { CustomizedSwitches } from "./switch";
import CloseIcon from "@mui/icons-material/Close";
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
} from "@mui/material";

import { ScrollableTabsButtonVisible } from "./date";
export const HomePage = () => {
  return (
    <>
      <RecipeReviewCard />
    </>
  );
};

const useStyles = makeStyles({
  stars: {
    display: "flex",
    alignItems: "center",
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  padding: "0px",
  color: "white",
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [replace, setReplace] = useState("");
  const [details, setDetails] = useState([]);

  const handleExpandClick = (event) => {
    console.log(event.target.value);
    setExpanded(true);
    setReplace(true);
    setDetails({
      ...details,
      common,
    });
  };
  const handleHideClick = (event) => {
    setExpanded(false);
    setReplace(false);
    setDetails({
      ...details,
      common,
    });
  };
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        {common.map((item, index) => {
          return (
            <Box key={index}>
              <Grid display="flex" justifyContent="space-between">
                <Grid container display={"flex"} spacing={2}>
                  <Grid mx={3}>
                    <img src={ProfileImgages} alt="dfa" />
                  </Grid>
                  <Grid mx={4}>
                    <Box>
                      <Grid display="flex" xs={12}>
                        <Grid
                          xs={3}
                          color={"#65B3FD"}
                          backgroundColor={"#EEF6FE"}
                          borderRadius={"16px"}
                          width={"70px"}
                          fontSize={"12px"}
                        >
                          <span
                            style={{
                              display: "flex",
                            }}
                          >
                            <CheckCircleIcon fontSize="19px" />
                            Expert
                          </span>
                        </Grid>
                        <Grid
                          backgroundColor={"#ffa07a"}
                          borderRadius={"16px"}
                          width={"59px"}
                        >
                          <span className={classes.stars}>
                            <StarRoundedIcon color="#FF865E" fontSize="10px" />
                            4.9
                          </span>
                        </Grid>
                        <Grid xs={4} color={"#67809A"}>
                          <span> (346 Review)</span>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box
                      sx={{
                        lineHeight: "10px",
                      }}
                    >
                      <Typography
                        fontFamily={"Poppins"}
                        color={"#012C57"}
                        fontWeight={"600, Semi Bold"}
                        fontStyle={"normal"}
                        fontSize={"18px"}
                        lineHeight={2}
                      >
                        {item?.name}
                      </Typography>

                      <Typography color={"#2CA58D"} lineHeight={2}>
                        <PendingActionsIcon fontSize="22px" />
                        {item?.digestion}
                      </Typography>
                      <Typography color={"#67809A"} lineHeight={2}>
                        {item?.workPlace}
                      </Typography>
                      <Grid display="flex" spacing={2}>
                        <Box
                          color={"#67809A"}
                          lineHeight={2}
                          display={"flex"}
                          letterSpacing={12}
                        >
                          <Typography>
                            <PeopleAltIcon fontSize="22px" />
                            {item?.patient}
                          </Typography>
                          <Typography>
                            <LocalOfferIcon fontSize="30px" />
                            <del> {item?.maxBit}</del> - <b>{item?.minBit}</b>
                          </Typography>
                        </Box>

                        <Typography
                          backgroundColor={"#ffa07a"}
                          borderRadius={"16px"}
                          // width={"50px"}
                          color={"white"}
                          lineHeight={2}
                        >
                          -20 %
                        </Typography>
                      </Grid>
                      <Typography
                        color={"#012C57"}
                        fontSize={"14px"}
                        lineHeight={2}
                      >
                        <MedicationIcon fontSize="38px" />
                        {item?.clinic}
                        <span>
                          <AddLocationAltSharpIcon fontSize="10px" />{" "}
                          {item?.location}
                        </span>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid mx={3}>
                  <Button>
                    <Grid
                      display="flex"
                      color={"black"}
                      border={"1px solid black"}
                      borderRadius={"30px"}
                      padding={"03px 10px"}
                    >
                      <CompressIcon
                        fontSize="12px"
                        sx={{
                          margin: "5px 4px",
                        }}
                      />
                      <Typography>Compare</Typography>{" "}
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
              <Divider />
              {replace ? (
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  m={3}
                  sm={12}
                  md={12}
                >
                  <CustomizedSwitches />
                  <Box>
                    <button
                      onClick={handleHideClick}
                      value="btn"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid gray",
                        boxSizing: "border-box",
                        borderRadius: "16px",
                        fontSize: "19px",
                        margin: "6px ",
                        display: "flex",
                        cursor: "pointer",
                        padding: "4px 18px",
                      }}
                    >
                      <CloseIcon marginTop="5px" />
                      close
                    </button>
                  </Box>
                </Grid>
              ) : (
                <Box display="flex" justifyContent="space-between" m={3}>
                  <Grid display="flex">
                    <Typography color="#2CA58D" fontSize="18px">
                      {" "}
                      <CalendarTodayRoundedIcon fontSize="18px" />
                      Available from:
                    </Typography>
                    <Typography>Jan 31, 9 am</Typography>
                  </Grid>
                  <Grid>
                    <Grid
                      backgroundColor={"black"}
                      display={"flex"}
                      alignItems={"center"}
                      color={"white"}
                      borderRadius={"30px"}
                    >
                      {" "}
                      <CardActions disableSpacing>
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          value="See Full Schedule"
                        >
                          <Typography>See Full Schedule</Typography>
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          );
        })}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <ScrollableTabsButtonVisible />
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
}
