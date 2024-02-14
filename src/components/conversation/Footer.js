import React from "react";
import { Box, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import { styled, useTheme } from "@mui/material/styles";


const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));


const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      p={2}
      sx={{
        background:
          theme.palette.mode === "light"
            ? " #F8FAFF"
            : theme.palette.background.paper,
        width: "100%",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack alignItems={"center"} direction={"row"} spacing={3}>
        <StyledInput
          variant="filled"
          fullWidth
          placeholder="Write a message..."
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: 48,
            width: 48,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ width: "100%", height: "100%" }}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
