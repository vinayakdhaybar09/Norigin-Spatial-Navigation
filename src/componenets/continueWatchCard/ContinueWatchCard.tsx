"use client";

import React from "react";
import { ContinueWatchCardBox } from "./continueWatchCard.style";
import { Box, Typography } from "@mui/material";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useRouter } from "next/navigation";

const ContinueWatchCard = ({ data, onFocus, onEnterPress }:any) => {
  const router = useRouter();

  const { ref, focused, focusKey } = useFocusable({
    onFocus,
    onEnterPress,
  });

  return (
    <ContinueWatchCardBox
      onClick={() => router.push("/media")}
      ref={ref}
      // hasFocusedChild={hasFocusedChild}
      sx={
        focused
          ? { border: "2px solid white", padding: "6px" }
          : {
              border: "2px solid transparent",
              padding: "6px",
              cursor: "pointer",
            }
      }
    >
      <Box
        sx={{
          transition: "transform 0.3s ease-in-out",
          "& : hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 5px 15px #7b7b7b",
          },
        }}
      >
        <img src={data.imgLink} alt="movie" />
      </Box>
      <Typography sx={{ color: "#fff" }}>{data.title}</Typography>
    </ContinueWatchCardBox>
  );
};

export default ContinueWatchCard;
