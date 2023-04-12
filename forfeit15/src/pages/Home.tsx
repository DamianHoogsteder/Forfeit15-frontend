import React from "react";
import {
    Stack,
    Flex,
    Box,
    Grid
} from "@chakra-ui/react";
import ThreadPreview from "../components/thread/threadPreview";
import FeaturedComponent from "../components/featuredComponent/featuredComponent";
import HeadingIcon from "../components/HeadingIcon/HeadingIcon";
import "./scrollbar.css";


export function Home() {
    return (
            <Box mt={0}>
                <HeadingIcon />
                <Flex alignItems="center" justifyContent="center" height="100%" mt={0}>
                    <Grid templateColumns="3fr 2fr" gap={4}>
                        <Box
                            height="90vh"
                            sx={{
                                overflowY: "auto",
                                maxHeight: "70vh",
                                scrollbarWidth: "auto",
                                scrollbarColor: "#E53E3E #1A202C",
                                paddingRight: "6px",
                            }}
                        >
                            <Stack spacing={4}>
                                {/* Threads to be rendered from backend*/}
                                <ThreadPreview/>
                                <ThreadPreview/>
                                <ThreadPreview/>
                                <ThreadPreview/>
                                <ThreadPreview/>
                                <ThreadPreview/>
                                <ThreadPreview/>
                                <ThreadPreview/>
                                <ThreadPreview/>
                                <ThreadPreview/>
                            </Stack>
                        </Box>
                        <FeaturedComponent />
                    </Grid>
                </Flex>
            </Box>
    );
}
