const { extendTheme } = require("@chakra-ui/react");
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("rgb(26, 20, 31)", "rgb(214, 208, 220)")(props),
        bg: mode("rgb(214, 208, 220)", "rgb(26, 20, 31)")(props),
      },
    }),
  },
});

export default theme;
