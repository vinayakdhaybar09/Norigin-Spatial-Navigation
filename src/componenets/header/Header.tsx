"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import TvIcon from "@mui/icons-material/Tv";
import SensorsIcon from "@mui/icons-material/Sensors";
import AddIcon from "@mui/icons-material/Add";
import TranslateIcon from "@mui/icons-material/Translate";
import SettingsIcon from "@mui/icons-material/Settings";

import { IconBox, HeaderBox } from "./header.style";
import HeaderIcons from "../headerIcons/HeaderIcons";
import {
  FocusContext,
  init,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useRouter } from "next/navigation";

const IconArr = [
  <SearchIcon />,
  <HomeIcon />,
  <VideocamIcon />,
  <TvIcon />,
  <SensorsIcon />,
  <AddIcon />,
  <TranslateIcon />,
  <SettingsIcon />,
];

init({
  debug: false,
  visualDebug: false,
});

const Header = () => {
  const router = useRouter();
  const { ref, focusKey, focusSelf, hasFocusedChild } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    // focusKey: focusKeyParam,
    preferredChildFocusKey: undefined,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: "bar" },
  });

  React.useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const onCardPress = () => {
    router.push("/media");
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <HeaderBox ref={ref} >
        <AccountCircleIcon sx={{ color: "red" }} />
        <IconBox>
          {IconArr.map((icon, index) => {
            return <HeaderIcons icons={icon} key={index} onEnterPress={onCardPress} />;
          })}
        </IconBox>
      </HeaderBox>
    </FocusContext.Provider>
  );
};

export default Header;
