import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
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
import { Fragment, useState } from "react";
import { defaultStyle, gridFontStyle, spaceGrid } from "./data/spaceGrid";
import {
  descriptionContainerStyle,
  expandedCardStyle,
  innerCardStyle,
  innerTitleStyle,
  descriptionFontStyle,
  contentStyle,
} from "./styles/innerCard";
import modalStyle from "./styles/modal";

const SpaceCard = ({ space }) => {
  const [expanded, setExpanded] = useState(false);
  const [elevation, setElevation] = useState(2);

  const toggleExpand = () => setExpanded((prev) => !prev);
  const handleMouseOver = () => setElevation(16);
  const handleMouseOut = () => setElevation(2);

  const { title, address, currently_available, description, image_src } =
    space.attributes;

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
          <Card sx={expandedCardStyle}>
            <CardHeader
              sx={{ height: "12%" }}
              title={
                <Typography component="h2" variant="h4" sx={innerTitleStyle}>
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
              style={contentStyle}
              sx={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(${image_src})`,
              }}
            >
              <Box sx={descriptionContainerStyle}>
                <Typography sx={descriptionFontStyle}>{description}</Typography>
              </Box>
              <Card sx={innerCardStyle}>
                <Grid spacing={4} container>
                  {spaceGrid.map((gridItem) => (
                    <Grid
                      item
                      xs={6}
                      sx={gridItem.style ? gridItem.style : defaultStyle}
                      key={gridItem.name}
                    >
                      {gridItem.typography && (
                        <Typography sx={gridFontStyle}>
                          {space.attributes[gridItem.name]}
                          {gridItem.typography.value}
                          {gridItem.typography.possiblePlural &&
                            (space.attributes[gridItem.name] === 1 ? "" : "s")}
                        </Typography>
                      )}
                      {gridItem.icon}
                      {gridItem.condition &&
                        (space.attributes[gridItem.name]
                          ? gridItem.condition.true
                          : gridItem.condition.false)}
                    </Grid>
                  ))}
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
