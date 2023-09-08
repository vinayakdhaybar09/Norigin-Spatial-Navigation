"use client";

import { Box, styled } from "@mui/material";

export const ContinueWatchBox = styled(Box)`
overflow-x:hidden;
max-width:100%;
`

export const ContinueFlex = styled(Box)`
    display:flex;
    // alignitems:center;
    gap:20px;
    overflow-x:auto;
    -ms-overflow-style:none;
    scrollbar-width:none;

    &::-webkit-scrollbar{
        display:none;
    }
`