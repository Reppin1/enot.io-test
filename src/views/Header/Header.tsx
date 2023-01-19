import { Box, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
import { ActionsObject, useNewsSubscribe } from "../../store/global/global.store";

const Header = () => {
  const { actions: newsSubscribeActions } = useNewsSubscribe()
  const { setOpenDialog } = newsSubscribeActions as ActionsObject['dialog']

  return (
    <Box sx={{ marginBottom: '14px' }} display="flex" justifyContent="space-between" alignItems="center">
      <Typography color="white" variant="h4">To Do</Typography>
      <IconButton onClick={() => setOpenDialog(true)}>
        <SettingsIcon style={{ fill: 'white' }} fontSize="large" />
      </IconButton>
    </Box>
  );
};

export { Header };