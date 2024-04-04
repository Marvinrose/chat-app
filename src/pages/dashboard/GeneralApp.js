import React from "react";
import Chats from "./Chats";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
import NoChatSvg from "../../assets/Illustration/NoChat";
import { Link, useSearchParams } from "react-router-dom";
import ChatComponent from "../../components/conversation/Message";

const GeneralApp = () => {
  const [searchParams] = useSearchParams();
  const theme = useTheme();

  const { sidebar, chat_type, room_id } = useSelector((store) => store.app);
  // console.log(sidebar, "sidebarrr");
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
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
              searchParams.get("id")
                ? "0px"
                : "6px solid #0162C4",
          }}
        >
          {/* conversation */}
          {room_id !== null && chat_type === "individual" ? (
            <ChatComponent />
          ) : (
            // <Conversation />
            <Stack
              spacing={2}
              sx={{ width: "100%", height: "100%" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <NoChatSvg />
              <Typography variant="subtitle2">
                Select a conversation or start a {" "}
                <Link
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  new one
                </Link>
              </Typography>
            </Stack>
          )}
        </Box>
        {/* Contacts */}
        {/* {sidebar.open && <Contact/>} */}
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
              case "CONTACT":
                return <Contact />;

              case "STARRED":
                return <StarredMessages />;

              case "SHARED":
                return <SharedMessages />;

              default:
                break;
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
