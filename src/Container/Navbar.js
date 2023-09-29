import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "../Css/navbar.css";
import "../Css/button.css";
import LogoText from "../Components/LogoText";
import logo from "../images/Logo1.png";
import { Grid, IconButton, Paper, Stack, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
const pages = ["Total", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position={"fixed"} className="Navbar-image">
      <Container maxWidth="xxl">
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
            <img src={logo} alt={"logo"} width={"40px"} />
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
            sx={{ display: { xs: "none", md: "flex", sm: "flex" }, mr: 8 }}
          >
            <img src={logo} alt={"logo"} width={"30px"} />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none", sm: "flex" },
              border: "1px solid red",
            }}
          >
            <LogoText>MUSOFIR</LogoText>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <LogoText>MUSOFIR</LogoText>
              </Grid>
            </Grid>
          </Box>
          {/* <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Tooltip title="User name">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="U" src="../images/Gift-rafiki.svg" />
              </IconButton>
            </Tooltip>

            <Stack
              mx={2}
              spacing={0}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Typography
                variant="body1"
                color={"gold"}
                noWrap
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                Name
              </Typography>
              <Typography
                variant="body1"
                color={"gold"}
                noWrap
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                Total:100
              </Typography>
            </Stack>
          </Box> */}
          <Box
            sx={{
              flexGrow: 0,
              height: "40px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <button className="button">
              <PermIdentityIcon />{" "}
              <Typography
                color={"#fff"}
                noWrap
                ml={0.8}
                mr={0}
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: "600",
                }}
              >
                Login
              </Typography>
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
