import React from "react";

import Header from "./Header";
import { Box, Stack } from "@mui/material";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack sx={{ height: "100vh", maxHeight: "100vh", width: "auto" }}>
      {/* chat header */}
      <Header />
      {/* msg */}
      <Box sx={{ flexGrow: 1, width: "100%" }}></Box>
      {/* chat footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
