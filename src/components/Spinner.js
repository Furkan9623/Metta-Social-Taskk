import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner() {
  return (
    <Stack
      sx={{
        color: "grey.500",
        margin: "12rem auto",
      }}
      spacing={5}
      direction="row"
    >
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
