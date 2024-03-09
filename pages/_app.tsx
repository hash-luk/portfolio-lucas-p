import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Theme from "../styles/theme";

function MyApp({ Component }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <Component />
    </ChakraProvider>
  );
}

export default MyApp;
