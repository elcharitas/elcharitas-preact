import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

export const theme = extendTheme({
    colors: {
        brand: {
            900: "yellow.600",
            800: "yellow.500",
            700: "yellow.500",
            600: "yellow.400",
            500: "yellow.400",
            400: "yellow.400",
            300: "yellow.400",
            200: "yellow.400",
            100: "yellow.400",
        },
    },
    fonts: { body: "Poppins" },
});
