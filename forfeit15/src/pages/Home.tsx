import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    Text,
    Image,
    CardHeader,
    Flex,
    Avatar, Box, IconButton, Grid, GridItem
} from "@chakra-ui/react";
import {BiChat, BiLike, BiShare, BsThreeDotsVertical} from "react-icons/all";
import Thread from "../components/Thread/Thread";

export function Home() {
    return (
        <Box height="100vh">
            <Flex alignItems="center" justifyContent="center" height="100%">
                <Box bg="grey.400" width={300} height={150} position="absolute">
                    <Image src="https://via.placeholder.com/150" alt="My Image" objectFit="contain"/>
                </Box>
                <Grid templateColumns="3fr 2fr" gap={4}>
                    <Box>
                        <Stack spacing={4}>
                            <Thread/>
                            <Thread/>
                            <Thread/>
                        </Stack>
                    </Box>
                    <Box
                        borderRadius="md"
                        boxShadow="md"
                        bg="gray.200"
                        height="100%"
                    />
                </Grid>
            </Flex>
        </Box>
    );
}