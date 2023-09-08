"use client";

import { Box, styled } from "@mui/material";

export const FavouriteFlex = styled(Box)`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
