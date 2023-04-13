import * as React from 'react';
import {Box, Flex, Link, Text} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {ArrowBackIcon} from "@chakra-ui/icons";

export default function ThreadHeader() {
    return (
        <Box
            bg="red.500"
            borderRadius="md"
            flexDirection="row"
            alignItems="center"
        >
            <Flex alignItems="center">
                <Link
                    as={RouterLink}
                    to="/"
                >
                    <ArrowBackIcon
                        color="white"
                        fontSize="2xl"
                        mx={3}
                    />
                </Link>
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    ml={3}
                    color="white"
                    p={3}
                >
                    Patch 13.7 - 12/04/2023
                </Text>
            </Flex>
        </Box>
    );
};