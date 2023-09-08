"use client";

import React from "react";
import { DefaultCardImg } from "./defaultCard.style";
import { Box, Typography } from "@mui/material";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useRouter } from "next/navigation";

const DefaultCard = ({ data, onFocus, onEnterPress }:any) => {
  const router = useRouter();

  const { ref, focused, focusKey } = useFocusable({
    onFocus,
    onEnterPress,
  });
  return (
    <Box
      onClick={() => router.push("/media")}
      ref={ref}
      sx={
        focused
          ? { border: "2px solid white", padding: "6px", borderRadius: "24px" }
          : { border: "2px solid transparent", padding: "6px" }
      }
    >
      <DefaultCardImg
        sx={{
          width: "240px",
          transition: "transform 0.3s ease-in-out",
          cursor: "pointer",
          "& : hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 5px 15px #7b7b7b",
          },
        }}
      >
        <img src={data.imgLink} alt="" />
      </DefaultCardImg>
      <Typography sx={{ margin: "1vh", color: "#fff" }}>
        {data.title}
      </Typography>
    </Box>
  );
};

export default DefaultCard;
