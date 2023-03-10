import React from "react";
import {
    Stack,
    Image,
    Flex,
    Box,
    Grid,
    CSSReset
} from "@chakra-ui/react";
import Thread from "../components/thread/thread";
import Searchbar from "../components/searchbar/searchbar";
import HeadingIcon from "../components/HeadingIcon/HeadingIcon";

export function Home() {
    return (
        <>
            <CSSReset/>
            <Box mt={0}>
                <HeadingIcon />
                <Flex alignItems="center" justifyContent="center" height="100%" mt={0}>
                    <Grid templateColumns="3fr 2fr" gap={4}>
                        <Box
                            height="70vh"
                            sx={{
                                overflowY: "auto",
                                maxHeight: "70vh",
                            }}
                        >
                            <Stack spacing={4}>
                                {/* Threads to be rendered from backend*/}
                                <Thread/>
                                <Thread/>
                                <Thread/>
                                <Thread/>
                                <Thread/>
                                <Thread/>
                                <Thread/>
                                <Thread/>
                                <Thread/>
                                <Thread/>
                            </Stack>
                        </Box>
                        <Searchbar />
                    </Grid>
                </Flex>
            </Box>
        </>
    );
}
