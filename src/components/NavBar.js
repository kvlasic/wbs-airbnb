import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ backgroundColor: "#FF385C" }} position="fixed">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Typography
              fontFamily={"Fredoka One"}
              variant="h5"
              component="h1"
              sx={{
                flexGrow: 1,
                ml: 2,
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              {"Airbnb clone".toUpperCase()}
            </Typography>
          </Box>
          <Button onClick={() => navigate("/places")} color="inherit">
            <Typography fontFamily={"Fredoka One"}>Places</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
