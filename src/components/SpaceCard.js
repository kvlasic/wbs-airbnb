import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PersonIcon from "@mui/icons-material/Person";
import SignalWifiOffIcon from "@mui/icons-material/SignalWifiOff";
import WifiIcon from "@mui/icons-material/Wifi";
import {
  Avatar,
  Box,
  capitalize,
  CardActionArea,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { green, red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import innerCardStyle from "./styles/innerCard";
import modalStyle from "./styles/modal";

const SpaceCard = ({ space }) => {
  const [expanded, setExpanded] = useState(false);
  const [elevation, setElevation] = useState(2);

  const toggleExpand = () => setExpanded((prev) => !prev);
  const handleMouseOver = () => setElevation(16);
  const handleMouseOut = () => setElevation(2);

  const {
    title,
    address,
    currently_available,
    description,
    maximum_guests,
    minimum_nights,
    parking,
    price_per_night,
    rooms,
    wifi,
    image_src,
  } = space.attributes;

  const avatarColor = currently_available ? green[300] : red[300];

  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          elevation={elevation}
          sx={{ borderRadius: 4 }}
        >
          <CardHeader
            sx={{ maxHeight: 44 }}
            title={<Typography fontFamily={"Pacifico"}>{title}</Typography>}
            avatar={
              <Avatar sx={{ bgcolor: avatarColor }}>
                {currently_available ? (
                  <EventAvailableIcon />
                ) : (
                  <EventBusyIcon />
                )}
              </Avatar>
            }
            subheader={<Box mt={1}>{capitalize(address)}</Box>}
          />
          <CardActionArea onClick={toggleExpand}>
            <CardMedia
              component="img"
              image={image_src}
              sx={{ minHeight: 300 }}
              alt="Space front image"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Modal onClose={toggleExpand} open={expanded}>
        <Box sx={modalStyle}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 10,
            }}
          >
            <CardHeader
              sx={{ height: "12%" }}
              title={
                <Typography
                  component={"h2"}
                  variant={"h4"}
                  fontFamily={"Pacifico"}
                  textAlign={"center"}
                >
                  {title}
                </Typography>
              }
              subheader={
                <Box mt={2} sx={{ textAlign: "center" }}>
                  {address}
                </Box>
              }
            />
            <CardContent
              sx={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(${image_src})`,
                height: "78%",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box sx={{ width: "60%", maxHeight: "77%", overflow: "auto" }}>
                <Typography
                  fontWeight={500}
                  fontSize={22}
                  fontFamily={"Sansita Swashed"}
                  lineHeight={2.2}
                >
                  {description}
                </Typography>
              </Box>
              <Card sx={innerCardStyle}>
                <Grid spacing={4} container>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      placeContent: "center",
                    }}
                  >
                    <Typography
                      fontWeight={500}
                      fontSize={22}
                      fontFamily={"Sansita Swashed"}
                    >
                      {maximum_guests}
                    </Typography>{" "}
                    <PersonIcon />
                  </Grid>
                  <Grid
                    item
                    sx={{ placeContent: "center", display: "flex" }}
                    xs={6}
                  >
                    <Typography
                      fontWeight={500}
                      fontSize={22}
                      fontFamily={"Sansita Swashed"}
                    >
                      {minimum_nights} night{minimum_nights === 1 ? "" : "s"}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ placeContent: "center", display: "flex" }}
                    xs={6}
                  >
                    <Typography
                      fontWeight={500}
                      fontSize={22}
                      fontFamily={"Sansita Swashed"}
                    >
                      {price_per_night}€/night
                    </Typography>{" "}
                  </Grid>
                  <Grid
                    item
                    sx={{ placeContent: "center", display: "flex" }}
                    xs={6}
                  >
                    <Typography
                      fontWeight={500}
                      fontSize={22}
                      fontFamily={"Sansita Swashed"}
                    >
                      {rooms} room{rooms === 1 ? "" : "s"}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ placeContent: "center", display: "flex" }}
                    xs={6}
                  >
                    {wifi ? (
                      <WifiIcon color="success" />
                    ) : (
                      <SignalWifiOffIcon color="disabled" />
                    )}
                  </Grid>
                  <Grid
                    sx={{ placeContent: "center", display: "flex" }}
                    item
                    xs={6}
                  >
                    {parking ? (
                      <LocalParkingIcon color="success" />
                    ) : (
                      <DoNotDisturbIcon color="disabled" />
                    )}
                  </Grid>
                </Grid>
              </Card>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </Fragment>
  );
};

SpaceCard.propTypes = {
  space: PropTypes.object.isRequired,
};

export default SpaceCard;
