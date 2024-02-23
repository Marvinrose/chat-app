import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const List = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Cnd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Cnd", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Cnd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Delete Chat",
    combination: ["Cnd", "Shift", "D"],
  },
  {
    key: 4,
    title: "Pin Chat",
    combination: ["Cnd", "Shift", "P"],
  },
  {
    key: 5,
    title: "Search",
    combination: ["Cnd", "F"],
  },
  {
    key: 6,
    title: "Search Chat",
    combination: ["Cnd", "Shift", "F"],
  },
  {
    key: 7,
    title: "Next Chat",
    combination: ["Cnd", "N"],
  },
  {
    key: 8,
    title: "Next Step",
    combination: ["Cnd", "Tab"],
  },
  {
    key: 9,
    title: "Previous Step",
    combination: ["Cnd", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "New Group",
    combination: ["Cnd", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profile and About",
    combination: ["Cnd", "P"],
  },
  {
    key: 12,
    title: "Increase Speed of Voice Message",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Decrease Speed of Voice Message",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Settings",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Emoji Panel",
    combination: ["Cnd", "E"],
  },
  {
    key: 16,
    title: "Sticker Panel",
    combination: ["Cnd", "S"],
  },
];

const Shortcuts = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      sx={{ P: 4 }}
    >
      <DialogTitle>{"Keyboard Shortcuts"}</DialogTitle>
      <DialogContent sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {List.map(({ key, title, combination }) => (
            <>
              <Grid key={key} container item xs={6}>
                <Stack
                  sx={{ width: "100%" }}
                  justifyContent="space-between"
                  spacing={3}
                  direction="row"
                  alignItems="center"
                >
                  <Typography sx={{ fontSize: 14 }} variant="caption ">
                    {title}
                  </Typography>
                  <Stack spacing={2} direction="row">
                    {combination.map((el) => {
                      return (
                        <Button
                          variant="contained"
                          disabled
                          sx={{ color: "#212121" }}
                        >
                          {el}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>
            </>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Shortcuts;
