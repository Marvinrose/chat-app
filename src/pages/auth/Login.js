import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Login To Tawk</Typography>
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">New User?</Typography>
        <Link to="/auth/register" component={RouterLink} variant="subtitle2">
          Create an Account
        </Link>
      </Stack>
      {/* Login form */}
      {/* Auth social */}
    </Stack>
  );
};

export default Login;
