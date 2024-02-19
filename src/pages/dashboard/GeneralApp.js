import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"}>
        {/* chats */}
        <Chats />

        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8F4FA"
                : theme.palette.background.paper,
            height: "100%",
            width: "calc(100vw - 740px)",
          }}
        >
          {/* conversation */}
          <Conversation />
        </Box>
        {/* Contacts */}
        <Contact />
      </Stack>
    </>
  );
};

export default GeneralApp;
