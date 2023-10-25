import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const api = "https://sociopedia-server-pday.onrender.com";

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${api}/assets/info4.jpeg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>BeutyCosmetics</Typography>
        <Typography color={medium}>beutycosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beuty. It is our job to make
        sure your skin and glowing.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
