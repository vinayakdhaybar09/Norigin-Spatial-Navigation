"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ContinueWatch from "@/componenets/continueWatching/ContinueWatch";
import Favourite from "@/componenets/favourite/Favourite";
import { Box } from "@mui/material";
import DefaultList from "@/componenets/defaultList/DefaultList";
import { MostWatchedData } from "@/utils/RequiredData";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import React from "react";

export default function Home() {
  const { ref, focusKey } = useFocusable();

  const onRowFocus = React.useCallback(
    ({ y }:any) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <main className={styles.main}>
        <h1>Hello</h1>
        <Box ref={ref}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
            <ContinueWatch onFocus={onRowFocus} />
            <Favourite onFocus={onRowFocus} />
            <DefaultList
              MostWatchedData={MostWatchedData}
              onFocus={onRowFocus}
            />
          </Box>
        </Box>
      </main>
    </FocusContext.Provider>
  );
}
