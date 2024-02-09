import { Box, Stack } from "@mui/material";
import React from "react";

const Conversation = () => {
  return (
    <Stack sx={{ height: "100vh", maxHeight: "100vh", width: "auto" }}>
      {/* chat header */}
      <Box sx={{ background: "#000", height: 100, width: "100%" }}></Box>
      {/* msg */}
      <Box sx={{ flexGrow: 1, width: "100%" }}></Box>
      {/* chat footer */}
      <Box sx={{ background: "#000", height: 100, width: "100%" }}></Box>
    </Stack>
  );
};

export default Conversation;
