import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, capitalize, CardActionArea, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";

const SpaceCard = ({ space }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prev) => !prev);

  const {
    title,
    address,
    currently_available,
    date,
    description,
    maximum_guests,
    maximum_nights,
    minimum_nights,
    parking,
    price_per_night,
    rooms,
    wifi,
    image_src,
  } = space.attributes;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card elevation={2}>
        <CardHeader
          sx={{ maxHeight: 44 }}
          avatar={<Avatar>Avatar</Avatar>}
          title={<Typography fontWeight={500}>{capitalize(title)}</Typography>}
          subheader={capitalize(address)}
        />
        <CardActionArea onClick={toggleExpand}>
          <CardMedia
            component="img"
            image={image_src}
            sx={{ minHeight: 300 }}
            alt="Space front image"
          />
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          Example description text
        </Collapse>
      </Card>
    </Grid>
  );
};

SpaceCard.propTypes = {
  space: PropTypes.object.isRequired,
};

export default SpaceCard;
