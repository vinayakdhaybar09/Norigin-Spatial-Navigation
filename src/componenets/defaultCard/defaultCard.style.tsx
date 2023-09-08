"use client";

import { Box, styled } from "@mui/material";

export const DefaultCardImg = styled(Box)`
  width: 150px;
  & img {
    width: 100%;
    border-radius: 20px;
    object-fit:cover;
  }
`;
