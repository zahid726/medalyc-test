import React from "react";
import { Map } from "../Map/map";
import { SideBar } from "../SideBar/SideBar";
import { HomePage } from "./homePage";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const HomeIndex = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} m={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={7.5}>
            <HomePage />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Map />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
