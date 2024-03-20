import { Dialog, DialogContent, Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  FetchFriendRequest,
  FetchFriends,
  FetchUsers,
} from "../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";

const UsersList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  return (
    <>
      {users.map((el, idx) => {
        // TODO => Render user component
        return <></>;
      })}
    </>
  );
};

const FriendsList = () => {
  const dispatch = useDispatch();

  const { friends } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchFriends());
  }, []);

  return (
    <>
      {friends.map((el, idx) => {
        // TODO => Render friends component
        return <></>;
      })}
    </>
  );
};

const FriendRequestList = () => {
  const dispatch = useDispatch();

  const { friendRequests } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchFriendRequest());
  }, []);

  return (
    <>
      {friendRequests.map((el, idx) => {
        // TODO => Render friend request component
        return <></>;
      })}
    </>
  );
};

const Friends = ({ open, handleClose }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      keepMounted
      open={open}
      onClose={handleClose}
      sx={{ p: 4 }}
    >
      <Stack p={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Requests" />
        </Tabs>
      </Stack>
      {/* Dialog Content */}
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.5}>
            {() => {
              switch (value) {
                case 0: // display all users
                  return <UsersList />;

                case 1: // display all friends
                  return <FriendsList />;

                case 2: // display all friend requests
                  return <FriendRequestList />;

                default:
                  break;
              }
            }}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
