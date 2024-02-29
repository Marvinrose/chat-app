import React from "react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px, 0px, 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5} sx={{ maxHeight: "100vh" }}>
            {/* header */}
            <Stack
              sx={{ height: "100%", p: 2 }}
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <IconButton>
                <CaretLeft size={24} color={"#4B4B4B"} />
              </IconButton>
              <Typography variant="h5">Profile</Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={faker.image.avatar()}
                alt={faker.name.fullName()}
              />
            </Stack>
            {/* profile form */}
            <ProfileForm />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
