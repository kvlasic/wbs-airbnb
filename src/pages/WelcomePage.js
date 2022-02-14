import { Box, Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box mt={16} textAlign={"center"} maxWidth={"50%"} mx={"auto"}>
      <Card sx={{ p: 4 }} raised>
        <Typography
          fontFamily={"Fredoka One"}
          my={2}
          component={"h2"}
          variant="h2"
        >
          Find the perfect experience
        </Typography>
        <Typography
          fontFamily={"Fredoka One"}
          fontWeight={300}
          my={4}
          component={"h4"}
          variant="h4"
          color={"GrayText"}
        >
          Check out these locations
        </Typography>
        <Button
          onClick={() => navigate("/places")}
          sx={{ mt: 4, color: "#FF385C", fontFamily: "Fredoka One" }}
          style={{ fontSize: "20px" }}
        >
          Find
        </Button>
      </Card>
    </Box>
  );
};

export default WelcomePage;
