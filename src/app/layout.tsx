import Header from "@/componenets/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
// import {
//   init,
//   FocusContext,
//   useFocusable,
// } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// init({
//   debug: false,
//   visualDebug: false,
// });

// useEffect(() => {
//   focusSelf();
// }, [focusSelf]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { focusKey } = useFocusable();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider> */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            // paddingTop: "5vh",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "6%",
              paddingTop: "5vh",

              display: "flex",
              justifyContent: "center",
              height: "100%",
              position: "sticky",
              top: "0px",
              left: "0px",
            }}
          >
            <Header focusKey="MENU"/>
          </Box>
          <Box sx={{ width: "92%", paddingTop: "5vh" }}>{children}</Box>
        </Box>
        {/* </Provider> */}
      </body>
    </html>
  );
}
