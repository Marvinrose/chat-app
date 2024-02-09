import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";

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
          <Conversation />
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
