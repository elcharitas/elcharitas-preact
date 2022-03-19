import { h } from "preact";
import { Router } from "preact-router";
import { Box } from "@chakra-ui/react";

import Header from "./header";
import Home from "../routes/home";

const App = () => (
    <Box>
        <Header />
        <Router>
            <Home path="/" />
        </Router>
    </Box>
);

export default App;
