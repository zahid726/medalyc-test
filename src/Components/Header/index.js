import * as React from "react";
import { Toolbar, Grid, Box, InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";

import AddBoxIcon from "@mui/icons-material/AddBox";
import { SelectAutoWidth } from "./DropDown/dropdown";

import VaccinesSharpIcon from "@mui/icons-material/VaccinesSharp";
import AddLocationAltSharpIcon from "@mui/icons-material/AddLocationAltSharp";
import PageviewRoundedIcon from "@mui/icons-material/PageviewRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import PersonPinCircleSharpIcon from "@mui/icons-material/PersonPinCircleSharp";
import { ResponsiveAppBar } from "./ProfileImg/profile";

const pages = ["Products", "Pricing", "Blog"];
export const MenuAppBar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#D0EFFF",
        opacity: [0.9, 0.8, 0.7],
      }}
    >
      <Toolbar>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container color={"black"} item md={3}>
            <AddBoxIcon />
            <Typography variant="h6">Medalyc</Typography>
          </Grid>
          <Grid container item md={6}>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#fff",
                color: "#000",
                alignItems: "center",
                height: "38px",
                borderRadius: "20px",
                width: "80%",
                justifyContent: "space-evenly",
              }}
            >
              <Typography color="#012C57">
                <VaccinesSharpIcon color="black" fontSize="18px" />{" "}
                Dermatologist
              </Typography>
              <Typography color="#012C57">
                {" "}
                <AddLocationAltSharpIcon color="black" fontSize="18px" /> Jeddah
              </Typography>
              <Typography color="#012C57">
                {" "}
                <DateRangeRoundedIcon color="black" fontSize="18px" /> Jan, 31 -
                Feb, 15
              </Typography>
              <Typography color="#012C57">
                <PersonPinCircleSharpIcon color="black" fontSize="18px" /> All
                Insurances
              </Typography>
              <Box fontSize="20px" color="#012C57">
                <PageviewRoundedIcon fontSize="10px" />
              </Box>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              sx={{
                display: "Flex",
                justifyContent: "end",
                alignItems: "center",
                margin: "0px 20px",
              }}
            >
              <Box>
                <SelectAutoWidth />
              </Box>

              <Box
                border={"none"}
                backgroundColor={"#012C57"}
                padding={"8px 0px"}
                color={"white"}
                display="flex"
                ml={2}
                borderRadius="25px"
              >
                <ResponsiveAppBar />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
};
