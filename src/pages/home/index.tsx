import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RoomIcon from "@mui/icons-material/Room";
import StarIcon from "@mui/icons-material/Star";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ElevatorIcon from "@mui/icons-material/Elevator";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const RoomCard = ({ title, image, guests, price, description }) => (
  <Box mt={4}>
    <Typography variant="h5" component="h3" gutterBottom>
      {title}
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <img
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 8,
          }}
          src={image}
          alt={title}
        />
        <Link href="#" underline="hover" color="inherit">
          See room details <ArrowForwardIosIcon fontSize="small" />
        </Link>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Room Option(s)
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </Grid>
          <Grid item xs={3} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Guest(s)
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" color="textSecondary" mr={1}>
                {guests}
              </Typography>
              <PersonIcon fontSize="small" />
              <PersonIcon fontSize="small" />
            </Box>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              Price/room/night
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {price}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D5AA7F",
                color: "#2D2928",
                "&:hover": { backgroundColor: "#D5AA7F" },
              }}
            >
              Choose
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Hotels
    </Link>,
    <Typography key="3" color="text.primary">
      The Luxury Hotel
    </Typography>,
  ];

  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          THE LUXURY HOTEL
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <RoomIcon fontSize="small" />
          <Typography variant="body1" color="textSecondary" ml={1}>
            The Luxury Hotel, Pattaya, Chonburi, Thailand.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} position="relative">
            <img
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 8,
              }}
              src="/img/images (1).jpg"
              alt="The Luxury Hotel"
            />
            <Box
              position="absolute"
              top={16}
              left={16}
              display="flex"
              alignItems="center"
              bgcolor="rgba(0, 0, 0, 0.7)"
              color="white"
              borderRadius={2}
              p={1}
            >
              <StarIcon fontSize="small" />
              <Typography variant="body2" ml={1}>
                9.0 Reviews
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "4px 16px",
                gap: "4px",
                width: "167px",
                height: "40px",
                backgroundColor: "#D5AA7F",
                border: "1px solid #D5AA7F",
                borderRadius: "100px",
                color: "#1E1E1E",
                fontFamily: "Noto Sans Thai UI",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                position: "absolute",
                left: "16px",
                bottom: "16px",
              }}
            >
              <PhotoCameraIcon sx={{ width: "20px", height: "20px" }} />
              See all photos
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                  }}
                  src="/img/images (2).jpg"
                  alt="Room View 1"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                  }}
                  src="/img/images (3).jpg"
                  alt="Room View 2"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                  }}
                  src="/img/images.jpg"
                  alt="Room View 3"
                />
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 8,
                    }}
                    src="/img/types-hotel-rooms.avif"
                    alt="Room View 4"
                  />
                  <IconButton
                    aria-label="more photos"
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                    }}
                  >
                    <PhotoCameraIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Typography variant="h5" component="h3" gutterBottom>
          Rooms
        </Typography>
        <RoomCard
          title="Superior Modern"
          image="/img/images (2).jpg"
          guests="2"
          price="฿1,358"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
        <RoomCard
          title="Business Suite"
          image="/img/images (3).jpg"
          guests="2"
          price="฿2,358"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
      </Box>
      <Box mt={4}>
        <Typography variant="h5" component="h3" gutterBottom>
          WHERE'S THE LUXURY HOTEL
        </Typography>
        <Box display="flex" mt={2}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.885018602683!2d100.52318621481093!3d13.736717990355057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d6eb53756f%3A0x3a6db1b36d92a6bb!2sKing%20Chulalongkorn%20Memorial%20Hospital!5e0!3m2!1sen!2sth!4v1625048192654!5m2!1sen!2sth"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <Box
            sx={{
              width: "30%",
              ml: 2,
              bgcolor: "#F5F5F5",
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              What's near by
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Current Selection
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <img
                src="/img/images.jpg"
                alt="The Luxury Hotel"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  marginRight: 8,
                }}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  THE LUXURY HOTEL
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  9.0
                </Typography>
              </Box>
            </Box>
            <Typography variant="subtitle2" gutterBottom>
              Explore
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Play
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Shop
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box mt={4} bgcolor="#D5AA7F" p={2}>
        <Container>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
              <Typography variant="body1" fontWeight="bold" color="#2D2928">
                <img src="logo.svg" alt="" />
              </Typography>
            </Grid>
            <Grid item>
              <Button sx={{ color: "#2D2928" }}>Hotels</Button>
              <Button sx={{ color: "#2D2928" }}>Flights</Button>
              <Button sx={{ color: "#2D2928" }}>Airport Transfer</Button>
              <Button sx={{ color: "#2D2928" }}>Car Rental</Button>
              <Button sx={{ color: "#2D2928" }}>Things to Do</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
