import {Box, Button, Flex, Image, Link, Text} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

export default function ThreadPreview() {
    return (
        <Box
            borderRadius="md"
            boxShadow="md"
            bg="gray.800"
            p={4}
            position="relative"
        >
            <Box
                bg="red.500"
                h={4}
                w={24}
                borderRadius="md"
                mb={4}
            />
            <Flex>
                <Image
                    src="https://via.placeholder.com/150"
                    alt="example image"
                    mr={4}
                    w={150}
                    h={150}
                    borderRadius="md"
                />
                <Box>
                    <Text fontSize="xl" fontWeight="bold" mb={2} color="white">Title</Text>
                    <Text fontSize="md" mb={4} color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum augue sed sem ultricies, at
                        suscipit metus sodales.
                    </Text>
                </Box>
            </Flex>
            <Link
                as={RouterLink}
                to="/thread"
            >
                <Button
                    colorScheme="red"
                    size="sm"
                    position="absolute"
                    bottom={4}
                    right={4}
                >
                    Continue reading
                </Button>
            </Link>
        </Box>
    );
}
