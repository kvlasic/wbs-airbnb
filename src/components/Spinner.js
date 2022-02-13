import { CircularProgress, Box } from "@mui/material";
import spinnerStyle from "./styles/spinner";

const Spinner = () => {
  return (
    <Box sx={spinnerStyle}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
