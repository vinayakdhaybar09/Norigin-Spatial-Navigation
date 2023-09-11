"use client";

import ContinueWatch from "@/componenets/continueWatching/ContinueWatch";
import Favourite from "@/componenets/favourite/Favourite";
import { Box } from "@mui/material";
import DefaultList from "@/componenets/defaultList/DefaultList";
import { MostWatchedData } from "@/utils/RequiredData";
import {
  FocusContext,
  init,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import React, { useCallback } from "react";

init({
  debug: false,
  visualDebug: false,
});

export default function Home() {
  const { ref, focusKey, focusSelf } = useFocusable();
  React.useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const onRowFocus = React.useCallback(
    ({ y }: any) => {
      ref.current?.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          overflow: "hidden",
        }}
      >
        <Box
          ref={ref}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            overflowY: "auto",
            overflowX: "hidden",
            flexShrink: 1,
            flexGrow: 1,
            maxHeight: "100vh",
          }}
        >
          <Box>
            <ContinueWatch onFocus={onRowFocus} />
            <Favourite onFocus={onRowFocus} />
            <DefaultList
              MostWatchedData={MostWatchedData}
              onFocus={onRowFocus}
            />
          </Box>
        </Box>
      </Box>
    </FocusContext.Provider>
  );
}
