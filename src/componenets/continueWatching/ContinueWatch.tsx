"use client";

import React from "react";
import { ContinueWatchBox, ContinueFlex } from "./continueWatch.style";
import { Box, styled, Typography } from "@mui/material";
import ContinueWatchCard from "../continueWatchCard/ContinueWatchCard";
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

const continueWatchData = [
  {
    id: 1,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/4BD31243-29AE-474F-8169-FE75883F7747/0-16x9.jpg?width=340",
    title: "Krack",
    done: "20%",
  },
  {
    id: 2,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/4BD31243-29AE-474F-8169-FE75883F7747/0-16x9.jpg?width=340",
    title: "Diary",
  },
  {
    id: 3,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/4BD31243-29AE-474F-8169-FE75883F7747/0-16x9.jpg?width=340",
    title: "Laggan",
  },
  {
    id: 4,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/4BD31243-29AE-474F-8169-FE75883F7747/0-16x9.jpg?width=340",
    title: "Baji",
  },
  {
    id: 5,
    imgLink:
      "https://image-resizer-cloud-api.akamaized.net/image/4BD31243-29AE-474F-8169-FE75883F7747/0-16x9.jpg?width=340",
    title: "Salaar",
  },
];

const ContinueWatch = ({ onFocus }:any) => {
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
      <ContinueWatchBox ref={ref}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: "2vh",
          }}
        >
          Continue Watching
        </Typography>
        <ContinueFlex ref={scrollingRef}>
          {continueWatchData.map((data) => {
            return (
              <ContinueWatchCard
                key={data.id}
                data={data}
                onFocus={onAssetFocus}
                onEnterPress={onCardPress}
              />
            );
          })}
        </ContinueFlex>
      </ContinueWatchBox>
    </FocusContext.Provider>
  );
};

export default ContinueWatch;
