import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import "../Css/navbar.css";
import "../Css/button.css";
import logo from "../images/Logo1.png";
import { Button, Grid, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import textImage from "../images/Boriga-Baraka.svg";
const pages = ["Total", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position={"fixed"} className="Navbar-image">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          variant="dense"
          className="toolbar"
          sx={{ minHeight: "45px" }}
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
                sm: "none",
              },
            }}
          >
            <img src={logo} alt={"logo"} width={"35px"} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component={NavLink}
            to={"/main"}
            sx={{ display: { xs: "none", md: "flex", sm: "flex" }, mr: 2 }}
          >
            <img src={logo} alt={"logo"} width={"40px"} />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none", sm: "flex" },
            }}
          >
            <img src={textImage} alt={"logo"} width={"40px"} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid
              container
              justifyContent={"start"}
              alignItems={"center"}
              sx={{ pt: 1 }}
            >
              <Grid item>
                <img src={textImage} alt={"logo"} width={"180px"} />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              height: "40px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {" "}
            <button className="button1">
              <PermIdentityIcon sx={{ color: "#f2f2f2" }} />
              <Typography className="navbar-button1">Учетная запись</Typography>
            </button>
            <button className="button">
              <Typography className="navbar-button">Авторизация</Typography>
            </button>
            {/* <Avatar src="../images/Gift-rafiki.svg" /> */}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              height: "40px",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="U" src="../images/Gift-rafiki.svg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
