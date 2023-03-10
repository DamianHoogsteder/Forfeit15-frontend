import React from "react";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import Router from "../Router";

export function App() {
    const bgImage = "url('https://cdnb.artstation.com/p/assets/images/images/053/426/897/large/rudy-siswanto-udyr-bear.jpg?1662171459')";
    const bgSize = "cover";
    const bgRepeat = "no-repeat";
    const bgColor = useColorModeValue("white", "gray.800");
    const bgGradient = "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))";

    return (
        <Box
            h="100vh"
            bgImage={`${bgGradient}, ${bgImage}`}
            bgSize={bgSize}
            bgRepeat={bgRepeat}
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
