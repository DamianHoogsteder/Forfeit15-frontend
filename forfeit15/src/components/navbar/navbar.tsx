import React from 'react';
import {
    Box,
    Button,
    Flex, Icon,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {ArrowDownIcon} from "@chakra-ui/icons";
import {AiFillMessage} from "react-icons/all";

export default function Navbar() {
    const bg = useColorModeValue('gray.900', 'white');
    const color = useColorModeValue('white', 'white');
    return (
        <Flex bg={bg} color={color} px='2' py='2' justifyContent='space-between' alignItems='center'>
            <Link as={RouterLink} to='/login'>
                <Button leftIcon={<ArrowDownIcon />} rounded='4px' colorScheme='red'>Download now</Button>
            </Link>
            <Box>
                <Link as={RouterLink} to='/login'>
                    <Button rounded='4px' colorScheme='red'>Login</Button>
                </Link>
            </Box>

        </Flex>
    );
};


