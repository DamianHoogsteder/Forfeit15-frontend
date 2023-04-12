import React, {useState} from "react";
import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import FeaturedComponent from "../components/featuredComponent/featuredComponent";
import HeadingIcon from "../components/HeadingIcon/HeadingIcon";

export default function Thread() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddRequestClick = () => {
        setIsModalOpen(true);
    };

    return (
        <Box mt={0}>
            <HeadingIcon/>
            <Flex alignItems="center" justifyContent="center" height="100%" mt={0}>
                <Grid templateColumns={{base: "1fr", md: "3fr 2fr"}} gap={4}>
                    <Box
                        bg="gray.800"
                        height={{base: "auto", md: "70vh"}}
                        width={{base: "100%", md: "1000px"}}
                        borderRadius="md"
                        boxShadow="md"
                        position="relative"
                    >
                        <Box
                            bg="red.500"
                            h={12}
                            mb={4}
                            borderRadius="md"
                            zIndex="1"
                        >
                            <Text fontSize="xl" fontWeight="bold" ml={3} color="white">
                                Patch 13.7 - 12/04/2023
                            </Text>
                        </Box>
                        <Box>
                            <Box
                                bg="gray.700"
                                borderRadius="md"
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                textAlign="center"
                                marginTop={{base: "50px", md: "25px"}}
                                _hover={{
                                    bg: "gray.600",
                                }}
                                onClick={handleAddRequestClick}
                                width={{base: "80%", md: "90%"}}
                                maxWidth={{base: "300px", md: "none"}}
                            >
                                <Box
                                    bg="red.500"
                                    w={12}
                                    h={12}
                                    borderRadius="full"
                                    display="inline-flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box
                                        as="span"
                                        fontSize="2xl"
                                        fontWeight="bold"
                                        color="white"
                                    >
                                        +
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Right component */}
                    <FeaturedComponent/>
                </Grid>
            </Flex>
            {/* Modal code goes here */}
        </Box>

    );
}