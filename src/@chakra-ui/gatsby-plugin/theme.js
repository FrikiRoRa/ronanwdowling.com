import { extendTheme } from "@chakra-ui/react";

import "@fontsource/chivo/400.css";

const theme = {
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    mainBody: "white",
  },
};

export default extendTheme(theme);
