import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";
import Spinner from "./Spinner";

const SpacesList = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const requestSpaces = async () => {
      const res = await fetch(
        "https://my-strapi-server-1.herokuapp.com/api/living-spaces"
      );
      const data = await res.json();
      setSpaces(data.data);
    };
    requestSpaces();
  }, []);

  return (
    <Box m={4}>
      {spaces.length === 0 ? (
        <Spinner />
      ) : (
        <Grid container spacing={4} mt={2}>
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SpacesList;
