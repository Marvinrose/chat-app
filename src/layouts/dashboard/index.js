import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Navigate, Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import {
  FetchUserProfile,
  SelectConversation,
  showSnackbar,
} from "../../redux/slices/app";
import {
  AddDirectConversation,
  AddDirectMessage,
  UpdateDirectConversation,
} from "../../redux/slices/conversation";
import useResponsive from "../../hooks/useResponsive";
import {
  PushToAudioCallQueue,
  UpdateAudioCallDialog,
} from "../../redux/slices/audioCall";
import AudioCallNotification from "../../sections/dashboard/Audio/CallNotification";
import AudioCallDialog from "../../sections/dashboard/Audio/CallDialog";

const DashboardLayout = () => {
  const isDesktop = useResponsive("up", "md");
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { conversations, current_conversation } = useSelector(
    (state) => state.conversation.direct_chat
  );

  // const { user_id } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  const { open_audio_notification_dialog, open_audio_dialog } = useSelector(
    (state) => state.audioCall
  );

  useEffect(() => {
    dispatch(FetchUserProfile());
  }, []);

  const handleCloseAudioDialog = () => {
    dispatch(UpdateAudioCallDialog({ state: false }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }

      socket.on("audio_call_notification", (data) => {
        // TODO => dispatch an action to add this in call_queue
        dispatch(PushToAudioCallQueue(data));
      });

      //  new friend request

      socket.on("new_friend_request", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });

      socket.on("request_accepted", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });

      socket.on("request_sent", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });

      socket.on("new_message", (data) => {
        const message = data.message;
        console.log(current_conversation, data);
        // check if msg we got is from currently selected conversation
        if (current_conversation?.id === data.conversation_id) {
          dispatch(
            AddDirectMessage({
              id: message._id,
              type: "msg",
              subtype: message.type,
              message: message.text,
              incoming: message.to === user_id,
              outgoing: message.from === user_id,
            })
          );
        }
      });

      socket.on("start_chat", (data) => {
        console.log(data);

        const existing_conversation = conversations.find(
          (el) => el?.id === data._id
        );
        if (existing_conversation) {
          // update direct conversation
          dispatch(UpdateDirectConversation({ conversation: data }));
        } else {
          // add direct conversation
          dispatch(AddDirectConversation({ conversation: data }));
        }
        dispatch(SelectConversation({ room_id: data._id }));
      });
    }

    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat");
      socket?.off("new_message");
      socket?.off("audio_call_notification");
    };
  }, [isLoggedIn, socket]);

  const theme = useTheme();

  console.log(theme);

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <>
      <Stack direction="row">
        {isDesktop && (
          // SideBar
          <SideBar />
        )}
        <Outlet />
      </Stack>
      {open_audio_notification_dialog && (
        <AudioCallNotification open={open_audio_notification_dialog} />
      )}
      {open_audio_dialog && (
        <AudioCallDialog
          open={open_audio_dialog}
          handleClose={handleCloseAudioDialog}
        />
      )}
    </>
  );
};

export default DashboardLayout;
