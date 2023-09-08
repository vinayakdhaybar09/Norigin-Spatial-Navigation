"use client";

import { Box, styled } from "@mui/material";

export const DefaultListBox = styled(Box)`
  overflow-x: hidden;
  max-width: 100%;
`;

export const DefaultFlex = styled(Box)`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
