"use client";

import { Typography } from "@mui/material";
import React from "react";
import { DefaultFlex, DefaultListBox } from "./defaultList.style";
import DefaultCard from "../defaultCard/DefaultCard";
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

const DefaultList = ({ MostWatchedData, onFocus }:any) => {
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
      <DefaultListBox ref={ref}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: "2vh",
          }}
        >
          Most Watched
        </Typography>
        <DefaultFlex ref={scrollingRef}>
          {MostWatchedData.map((data:any) => {
            return (
              <DefaultCard
                key={data.id}
                data={data}
                onFocus={onAssetFocus}
                onEnterPress={onCardPress}
              />
            );
          })}
        </DefaultFlex>
      </DefaultListBox>
    </FocusContext.Provider>
  );
};

export default DefaultList;
