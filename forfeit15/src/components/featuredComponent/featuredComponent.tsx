import {Box, Input, InputGroup, Button, Flex, InputRightElement} from "@chakra-ui/react";
import {FaSearch} from "react-icons/fa";
import React from "react";


export default function FeaturedComponent() {
    return (
        <Box borderRadius="md" boxShadow="md" bg="gray.800" height="100%" position="relative">
            <Flex
                position="absolute"
                top={0}
                left={0}
                right={0}
                zIndex={1}
                justify="center"
                alignItems="center"
                height="50px"
            >
                <InputGroup
                    mt={5}
                    mx={5}
                >
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
        </Box>

    );
}
