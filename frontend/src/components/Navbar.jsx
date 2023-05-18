import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
// import "../styles/navbar.css";
import { Icon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import { Link, useNavigate } from "react-router-dom";
const pages = ["Exercise Tracker", "Pricing", "GithubLink"];
const link = [
  "https://habbittracker-nm6t.onrender.com/",
  "/",
  "https://github.com/adarshshiftboolean/habbittracker",
];
const settings = ["Profile"];

function Navbar() {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector((state) => state.user.currentUser);
  let userdata = user.data.user;
  const Navigate = useNavigate();
  const logoutt = (e) => {
    e.preventDefault();
    console.log("click on ");
    dispatch(logout());
    Navigate("/login");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ bgcolor: "white" }}>
        <Toolbar disableGutters>
          <Icon color="secondary">
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                fontSize: "30px",
                pt: -1,
              }}
            />
          </Icon>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              ml: 2,
            }}
            className="navbar-heading"
          >
            Kratin Care
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 700,

              color: "black",
              textDecoration: "none",
            }}
          >
            Kratin Care
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 40 }}
          >
            {pages.map((page, index) => (
              <Link to={link[index]} sx={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    textDecoration: "none",
                    mr: 1,
                    my: 2,
                    color: "white",
                    display: "block",
                    bgcolor: "skyblue",
                    "&:hover": {
                      bgcolor: "green",
                    },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userdata?.avatar ? (
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost:8000${userdata.avatar}`}
                  />
                ) : (
                  <Avatar alt="Remy Sharp" src="" />
                )}

                <Typography
                  variant="h6"
                  sx={{
                    marginLeft: "10px",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {userdata?.name}
                </Typography>
                {user && (
                  <Button onClick={logoutt} sx={{ ml: 2 }}>
                    Logout
                  </Button>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      sx={{ textDecoration: "none", color: "black" }}
                      textAlign="center"
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
