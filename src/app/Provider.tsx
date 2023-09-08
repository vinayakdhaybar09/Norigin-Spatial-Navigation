"use client"

import React, { useEffect } from "react";
import {
  init,
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";

init(
//     {
//   debug: false,
//   visualDebug: false,
// }
);

const Provider = ({ children }:any) => {
  const { focusKey, focusSelf } = useFocusable();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);


  return (
    <FocusContext.Provider value={focusKey}>{children}</FocusContext.Provider>
  );
};

export default Provider;
