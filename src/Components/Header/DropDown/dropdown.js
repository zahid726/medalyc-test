import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import { Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export const SelectAutoWidth = () => {
  return (
    <>
      <Box
        border={"none"}
        backgroundColor={"#fff"}
        padding={"14px"}
        display="flex"
        borderRadius="25px"
      >
        <LanguageIcon fontSize="14px" />
        Eng
        <select
          style={{
            border: "none",
            backgroundColor: "#ffff",
            width: "19px",
            outline: "none",
          }}
        >
          <option value="asc">Asce</option>
          <option value="desc">Desc</option>
        </select>
      </Box>
    </>
  );
};
