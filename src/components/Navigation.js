import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const Navigation = ({ onClick }) => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.btnColor}`,
          backgroundColor: (theme) => `${theme.palette.accentColor.main}`,
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            GuessTheCity
          </Typography>
          <Button onClick={onClick} variant="outline" sx={{ my: 1, mx: 1.5 }}>
            <DarkModeIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
