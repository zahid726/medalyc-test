import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Box } from "@mui/material";

export const Sort = () => {
  return (
    <>
      <Box border={"none"} width="100px">
        <SortIcon />
        Sort by
        <select
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "none",
            backgroundColor: "#ffff",
            outline: "none",
            width: "100px",
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </select>
      </Box>
    </>
  );
};
