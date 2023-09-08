"use client";

import React from "react";
import { FavouriteFlex } from "./favourite.style";
import { Box, Typography } from "@mui/material";
import FavouriteCard from "../favouriteCard/FavouriteCard";
import {
  FocusContext,
  init,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useRouter } from "next/navigation";

init({
  debug: false,
  visualDebug: false,
});

const favouriteData = [
  {
    id: 1,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/ashwin-babu/0-1x1.jpg?width=150",
  },
  {
    id: 2,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/nandita-swetha/0-1x1.jpg?width=150",
  },
  {
    id: 3,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/srinivasa-reddy/0-1x1.jpg?width=150",
  },
  {
    id: 4,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/raghu-kunche/0-1x1.jpg?width=150",
  },
  {
    id: 5,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/ashwin-babu/0-1x1.jpg?width=150",
  },
  {
    id: 6,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/nandita-swetha/0-1x1.jpg?width=150",
  },
  {
    id: 7,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/srinivasa-reddy/0-1x1.jpg?width=150",
  },
  {
    id: 8,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/raghu-kunche/0-1x1.jpg?width=150",
  },
  {
    id: 9,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/ashwin-babu/0-1x1.jpg?width=150",
  },
  {
    id: 10,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/nandita-swetha/0-1x1.jpg?width=150",
  },
  {
    id: 11,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/srinivasa-reddy/0-1x1.jpg?width=150",
  },
  {
    id: 12,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/raghu-kunche/0-1x1.jpg?width=150",
  },
];

const Favourite = ({ onFocus }:any) => {
  const router = useRouter();
  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const scrollingRef = React.useRef<HTMLDivElement>(null);

  const onAssetFocus = React.useCallback(
    ({ x }:any) => {
      scrollingRef.current?.scrollTo({
        left: x,
        behavior: "smooth",
      });
    },
    [scrollingRef]
  );

  const onCardPress = () => {
    router.push("/media");
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <Box
        ref={ref}
        sx={{ width: "100%", overflowX: "hidden", maxWidth: "100%" }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: "2vh",
          }}
        >
          Pick your Favourite
        </Typography>

        <FavouriteFlex ref={scrollingRef}>
          {favouriteData.map((data) => {
            return (
              <FavouriteCard
                key={data.id}
                data={data}
                onFocus={onAssetFocus}
                onEnterPress={onCardPress}
              />
            );
          })}
        </FavouriteFlex>
      </Box>
    </FocusContext.Provider>
  );
};

export default Favourite;
