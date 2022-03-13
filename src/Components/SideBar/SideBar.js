import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RestartAltSharpIcon from "@mui/icons-material/RestartAltSharp";
import { SideBarTabes } from "./SiderBarDropDown";
// import Radio from "@material-ui/core/Radio";
export const SideBar = () => {
  return (
    <>
      <Box>
        <Button
          sx={{
            borderRadius: "15px",
            backgroundColor: "#D0EFFF",
            color: "black",
            width: "100%",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Grid>
              <Typography
                sx={{
                  fontSize: "17px",
                  color: " #012C57",
                }}
              >
                <DeleteOutlineIcon /> See related Offers <ArrowRightIcon />
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#67809A",
                }}
              >
                250 offers around your location
              </Typography>
            </Grid>
          </Grid>
        </Button>
        <Box
          mt={4}
          display={"flex"}
          sx={{ justifyContent: "space-between" }}
          m={2}
        >
          <Box display={"flex"}>
            <FilterAltIcon />
            <Typography variant="h6">Filter</Typography>
          </Box>
          <Box display={"flex"} color={"#FF865E"}>
            <RestartAltSharpIcon />
            <Typography variant="h6">reset</Typography>
          </Box>
        </Box>
        <Divider />
        <Box>
          <SideBarTabes />
        </Box>
      </Box>
    </>
  );
};
