import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Sort } from "./Sort";
export const SortOrder = () => {
  return (
    <>
      <Grid
        container
        m={2}
        md={12}
        sm={12}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Grid mx={4}>
          <Typography color={"#012C57"} fontSize={"18px"} variant="h6">
            {" "}
            204 provider available
          </Typography>
          <Typography color={"#67809A"} fontSize={"14px"}>
            Around your location
          </Typography>
        </Grid>
        <Grid md={2}></Grid>
        <Grid md={2} justifyContent="center">
          <Box
            sx={{
              minWidth: 150,
              borderRadius: "30px",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <Sort />
          </Box>
        </Grid>
        <Grid md={1}></Grid>
      </Grid>
    </>
  );
};
