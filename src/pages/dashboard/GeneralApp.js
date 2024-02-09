import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";

const GeneralApp = () => {
  return (
    <>
      <Stack direction={"row"}>
        {/* chats */}
        <Chats />

        <Box
          sx={{
            backgroundColor: "#fff",
            height: "100%",
            width: "calc(100vw - 420px)",
          }}
        >
          {/* conversation */}
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
