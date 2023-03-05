import React from 'react';
import {
    Button,
    Flex,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {ArrowDownIcon} from "@chakra-ui/icons";

export default function Navbar() {
    const bg = useColorModeValue('gray.900', 'white');
    const color = useColorModeValue('white', 'white');
    return (
        <Flex bg={bg} color={color} px='4' py='2' justifyContent='space-between' alignItems='center'>
            <Link as={RouterLink} to='/login'>
                <Button leftIcon={<ArrowDownIcon />} rounded='4px' colorScheme='red'>Download now</Button>
            </Link>
            <Link as={RouterLink} to='/login'>
                <Button rounded='4px' colorScheme='red'>Login</Button>
            </Link>
        </Flex>
    );
};


