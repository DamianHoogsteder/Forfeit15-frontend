import React from "react";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import Router from "../Router";
import Image from "../assets/Ekko.jpg";

export function App() {
    const bgImage = Image;
    const bgSize = "cover";
    const bgRepeat = "no-repeat";
    const bgColor = useColorModeValue("white", "gray.800");
    const bgGradient = "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7))";

    return (
        <Box
            h="100%"
            bgImage={`${bgGradient}, url(${bgImage})`}
            bgSize={bgSize}
            bgRepeat={bgRepeat}
            bgAttachment="fixed"
        >
            <Flex>
                <Sidebar/>
                <Flex direction="column" flex="1">
                    <Box paddingLeft='16'>
                        <Navbar/>
                    </Box>
                    <Box flex="1" px='40' py='24' ml="5">
                        <Router/>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default App;
