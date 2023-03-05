import React from "react";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import Router from "../Router";

export function App() {
    return (
        <Box>
            <Flex>
                <Sidebar />
                <Flex direction="column" flex="1">
                    <Box paddingLeft='16'>
                        <Navbar/>
                    </Box>
                    <Box flex="1" px='24' py='8'>
                        <Router />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default App;
