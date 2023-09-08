"use client";

import { Box, Typography, Link } from "@mui/material";
import {
  FocusContext,
  init,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();
  const { ref, focused, focusKey, focusSelf } = useFocusable();

  useEffect(() => {
    focusSelf();

    // alternatively
    // setFocus('BUTTON_PRIMARY');
  }, [focusSelf]);

  const onCardPress = () => {
    router.push("/");
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "80vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "gray",
            fontSize: "10vw",
          }}
        >
          hello.
        </Typography>
        <Box ref={ref}>
          <HomeBtn onEnterPress={onCardPress} />
          {/* <Typography
            ref={ref}
            onClick={() => onCardPress()}
            sx={
              focused
                ? {
                    borderBottom: "3px solid white",
                    textDecoration: "none",
                    paddingBottom: "6px",
                    color: "gray",
                  }
                : {
                    borderBottom: "3px solid transparent",
                    textDecoration: "none",
                    paddingBottom: "6px",
                    color: "#fff",
                  }
            }
          >
            Go To Home
          </Typography> */}
        </Box>
      </Box>
    </FocusContext.Provider>
  );
};

export default page;

const HomeBtn = ({ onEnterPress }:any) => {
  const router = useRouter();
  const { ref, focused } = useFocusable({
    onEnterPress,
  });
  return (
    <Typography
      onClick={() => router.push("/")}
      ref={ref}
      sx={
        focused
          ? {
              borderBottom: "3px solid white",
              textDecoration: "none",
              paddingBottom: "6px",
              color: "gray",
            }
          : {
              borderBottom: "3px solid transparent",
              textDecoration: "none",
              paddingBottom: "6px",
              color: "#fff",
            }
      }
    >
      Go To Home
    </Typography>
  );
};
