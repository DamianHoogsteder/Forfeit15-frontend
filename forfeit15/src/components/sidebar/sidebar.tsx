import {Box, Icon, Link, Spacer, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {FiHome, FiSettings, FiUser, FiLogOut} from "react-icons/fi";
import React from "react";
import {AiFillCrown} from "react-icons/ai";

/* eslint-disable-next-line */
export interface SidebarProps {
}

export function Sidebar() {
    const bg = useColorModeValue('gray.900', 'gray.800');
    const activeBg = useColorModeValue('gray.700', 'gray.600');
    const color = useColorModeValue('white', 'gray.200');
    const activeColor = useColorModeValue('red.400', 'teal.300');
    return (
        <Box
            w="16"
            bg={bg}
            color={color}
            h="100vh"
            px="4"
            py="4"
            position="fixed"
        >
            {/* Logo */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="10"
            >
                <Icon as={AiFillCrown} fontSize="2xl" color={activeColor}/>
            </Box>

            {/* Navigation links */}
            <Box style={{ display: 'flex', flexDirection: 'column', height: '100%', position: "fixed"}}>
                <Stack spacing="6" flexGrow={1}>
                    <Link
                        as={RouterLink}
                        to="/"
                        display="flex"
                        px="1.5"
                        py="1"
                        rounded="md"
                        _hover={{ bg: activeBg }}
                    >
                        <Icon as={FiHome} fontSize="xl" color={color} mr="2" />
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/profile"
                        display="flex"
                        px="1.5"
                        py="1"
                        rounded="md"
                        _hover={{ bg: activeBg }}
                    >
                        <Icon as={FiUser} fontSize="xl" color={color} mr="2" />
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/settings"
                        display="flex"
                        px="1.5"
                        py="1"
                        rounded="md"
                        _hover={{ bg: activeBg }}
                    >
                        <Icon as={FiSettings} fontSize="xl" color={color} mr="2" />
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/logout"
                        display="flex"
                        px="1.5"
                        py="1"
                        rounded="md"
                        _hover={{ bg: activeBg }}
                    >
                        <Icon as={FiLogOut} fontSize="xl" color={color} mr="2" />
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default Sidebar;
