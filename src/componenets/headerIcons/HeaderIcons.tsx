"use client";
import { Box } from "@mui/material";
import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import SearchIcon from "@mui/icons-material/Search";

const HeaderIcons = ({ icons, onEnterPress }:any) => {
  const { ref, focused } = useFocusable({ onEnterPress });
  return (
    <Box
      ref={ref}
      sx={
        focused
          ? {
              borderBottom: "3px solid white",
            }
          : { borderBottom: "3px solid transparent" }
      }
    >
      {icons}
    </Box>
  );
};

export default HeaderIcons;
