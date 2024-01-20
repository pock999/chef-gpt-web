import React from 'react';
import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Box,
  LinearProgress,
  CircularProgress,
} from "@mui/material";

const DisabledBackground = styled(Box)({
  width: "100%",
  height: "100%",
  position: "fixed",
  background: "#ccc",
  opacity: 0.5,
  zIndex: 1
});

const LinearLoading = () => (
  <>
    <LinearProgress sx={{ zIndex: 2 }} />
    <DisabledBackground />
  </>
);

const CircularLoading = () => (
  <>
    <CircularProgress
      size={70}
      sx={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2
      }}
    />
    <DisabledBackground />
  </>
);

export function MaskLoading() {

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  if(matchmdUp) {
    return (
      <CircularLoading />
    )
  }

  return (
    <LinearLoading />
  )
}