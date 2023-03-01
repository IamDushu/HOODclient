import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import shark from "../../assets/sharkTank.jpg"

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

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
        src={shark}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Shark Tank 2</Typography>
        <Typography color={medium}>sonyliv.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      The Sharks are back, and India's aspiring entrepreneurs gear up once again to pitch their ideas.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
