import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();

  const { sidebar } = useSelector((store) => store.app);
  console.log(sidebar, "sidebarrr");
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
            width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          }}
        >
          {/* conversation */}
          <Conversation />
        </Box>
        {/* Contacts */}
        <Contact />
        {/* {sidebar.open && <Contact />} */}
      </Stack>
    </>
  );
};

export default GeneralApp;
