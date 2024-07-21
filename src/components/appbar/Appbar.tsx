import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = [
  "Hotels",
  "Flights",
  "Airport Transfer",
  "Car Rental",
  "Things to Do",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#2D2928",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  border: "1px solid #D5AA7F",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#D5AA7F",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#D5AA7F",
  width: "200px",
  padding: theme.spacing(1),
  backgroundColor: "#1E1E1E",
  borderRadius: theme.shape.borderRadius,
  "&::placeholder": {
    color: "#D5AA7F",
  },
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#D5AA7F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "#1E1E1E",
              textDecoration: "none",
            }}
          >
            <img
              src="logo.svg"
              alt="logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "#1E1E1E",
              textDecoration: "none",
            }}
          >
            <img src="logo.svg" alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#1E1E1E", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", gap: "20px" }}>
            <Button
              variant="outlined"
              sx={{
                color: "#1E1E1E",
                borderColor: "#1E1E1E",
                "&:hover": {
                  borderColor: "#1E1E1E",
                  backgroundColor: "rgba(213, 170, 127, 0.04)",
                },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1E1E1E",
                color: "#D5AA7F",
                "&:hover": { backgroundColor: "#1E1E1E" },
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <Box sx={{ bgcolor: "#2D2928", p: 2 }}>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
        >
          <Search>
            <SearchIconWrapper>
              <LocationOnIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="City, Hotel, Place to go"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: "flex", gap: "0px" }}>
            <Search>
              <SearchIconWrapper>
                <CalendarTodayIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Check-in"
                inputProps={{ "aria-label": "check-in" }}
              />
            </Search>
            <Search>
              <SearchIconWrapper>
                <CalendarTodayIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Check-out"
                inputProps={{ "aria-label": "check-out" }}
              />
            </Search>
          </Box>
          <Search onClick={handleOpenUserMenu}>
            <SearchIconWrapper>
              <PersonIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="1 Adult, 1 room"
              inputProps={{ "aria-label": "guests" }}
              readOnly
            />
            <ArrowDropDownIcon sx={{ color: "#D5AA7F", ml: 1 }} />
          </Search>
          <Menu
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>1 Adult, 1 room</MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>2 Adults, 1 room</MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>3 Adults, 2 rooms</MenuItem>
          </Menu>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#D5AA7F",
              color: "#2D2928",
              "&:hover": { bgcolor: "#D5AA7F" },
            }}
          >
            SEARCH
          </Button>
        </Container>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
