"use client";

import { Box, styled } from "@mui/material";

export const HeaderBox = styled(Box)`
& svg {
    cursor: pointer;
    color:#c1c1c1;
    font-size:25px;
    &:hover {
      color: #fc7231;
    }
  }
`

export const IconBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top:10vh;
  gap:20px;


  & svg {
    cursor: pointer;
    color:#c1c1c1;
    font-size:25px;
    &:hover {
      color: #fc7231;
    }
  }
`;
