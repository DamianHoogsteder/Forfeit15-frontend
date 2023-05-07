import {Box, Button, Flex, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {FaSearch} from "react-icons/fa";
import React from "react";
import {Link as RouterLink} from "react-router-dom";

export default function FeaturedComponent() {
    return (
        <Box borderRadius="md" boxShadow="md" bg="gray.800" height="100%" position="relative">
            <Flex position="absolute" top={0} left={0} right={0} zIndex={1} height="50px">
                <InputGroup mt={5} mx={5}>
                    <Input
                        placeholder="Search..."
                        size="md"
                        bg="gray.700"
                        border="none"
                        _focus={{ border: "none" }}
                    />
                    <InputRightElement>
                        <Button variant="solid" colorScheme="red">
                            <FaSearch />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Flex width="100%">
                <Button
                    as={RouterLink}
                    to="/settings"
                    variant="solid"
                    colorScheme="red"
                    mt={16}
                    ml={5}
                >
                    Set your preferences
                </Button>
            </Flex>
        </Box>
    );
}
