import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SignalWifiOffIcon from "@mui/icons-material/SignalWifiOff";
import WifiIcon from "@mui/icons-material/Wifi";
import PersonIcon from "@mui/icons-material/Person";

export const spaceGrid = [
  {
    name: "maximum_guests",
    style: {
      display: "flex",
      alignItems: "center",
      placeContent: "center",
    },
    typography: {
      value: " ",
    },
    icon: <PersonIcon />,
  },
  {
    name: "minimum_nights",
    typography: {
      possiblePlural: true,
      value: " night",
    },
  },
  {
    name: "price_per_night",
    typography: {
      value: "€/night",
    },
  },
  {
    name: "rooms",
    typography: {
      possiblePlural: true,
      value: " room",
    },
  },
  {
    name: "wifi",
    condition: {
      true: <WifiIcon color="success" />,
      false: <SignalWifiOffIcon color="disabled" />,
    },
  },
  {
    name: "parking",
    condition: {
      true: <LocalParkingIcon color="success" />,
      false: <DoNotDisturbIcon color="disabled" />,
    },
  },
];

export const defaultStyle = {
  display: "flex",
  placeContent: "center",
};

export const gridFontStyle = {
  fontWeight: 500,
  fontSize: 22,
  fontFamily: "Sansita Swashed",
};
