import { CircularProgress, Box } from "@mui/material";
import spinnerContainerStyle from "./styles/spinnerContainer";

const Spinner = () => {
  return (
    <Box sx={spinnerContainerStyle}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
