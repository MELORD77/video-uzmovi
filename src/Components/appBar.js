import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";

const MyToolbar = styled(Toolbar)({
  position: "sticky",
  height: { xs: "70px", md: "55px" },
  minHeight: "55px!important",
});
export default function ButtonAppBar() {
  const useStyles = makeStyles(() => ({
    appBar: {
      minHeight: "35px",
      height: { xs: "70px", md: "55px" },
      display: "flex",
      alignContent: "center",
      backgroundColor: "rgba(0, 51, 255, 0.672)!important", // Set the desired minimum height here
    },
    toolbar: {
      minHeight: "35px",
      height: "55px",
      // Set the desired minimum height here
    },
  }));
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.appBar}>
        <MyToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>{" "}
          <Button color="inherit">Login</Button>
        </MyToolbar>
      </AppBar>
    </Box>
  );
}
