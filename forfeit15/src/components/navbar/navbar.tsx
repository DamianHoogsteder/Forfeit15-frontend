import React from 'react';
import {
    Box,
    Button,
    Flex,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import {SettingsIcon} from '@chakra-ui/icons';
import {Link as RouterLink} from 'react-router-dom';
import Notifications from "./notifications";
import LoginButton from "../loginButton/LoginButton";




export default function Navbar() {
    const bg = useColorModeValue('gray.900', 'white');
    const color = useColorModeValue('white', 'white');
    const iconColor = useColorModeValue('gray.300', 'gray.400');
    const iconHoverColor = useColorModeValue('gray.500', 'gray.200');
        
    return (
        <Flex
            bg={bg}
            color={color}
            px="2"
            py="2"
            justifyContent="space-between"
            alignItems="center"
            position="fixed"
            width="100%"
            top="0"
            zIndex="999"
        >
            <Link as={RouterLink} to="/download">
            </Link>
            <Box mr="65">
                <Notifications />
                <Button
                    leftIcon={
                        <SettingsIcon
                            color={iconColor}
                            _hover={{color: iconHoverColor}}
                        />
                    }
                    variant="ghost"
                    aria-label="Settings"
                    _hover={{bg: 'transparent'}}
                />
                <LoginButton />
            </Box>
        </Flex>
    )
}