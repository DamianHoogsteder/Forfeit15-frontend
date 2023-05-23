import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Flex, Image, Link, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import LogoutButton from "../logoutButton/LogoutButton";

const ProfileMini = () => {
    const { user, isAuthenticated } = useAuth0();
    const bg = useColorModeValue('gray.700', 'white');
    const color = useColorModeValue('white', 'white');
    const iconColor = useColorModeValue('gray.300', 'gray.400');
    const iconHoverColor = useColorModeValue('gray.500', 'gray.200');
console.log(user)
    return (
        isAuthenticated ? (
            <Popover>
                <PopoverTrigger>
                    <Button bg="gray.700">
                        <Flex align="center" color="white">
                            {user?.picture && (
                                <Image src={user.picture} alt={user?.name} boxSize="32px" borderRadius="full" marginRight="8px" />
                            )}
                            <Text>{user?.name}</Text>
                        </Flex>
                    </Button>
                </PopoverTrigger>
                <PopoverContent bg={bg} color={color} border="none">
                    <PopoverArrow bg={bg} color={color} border="none" />
                    <PopoverBody display="flex" flexDirection="column" minHeight="300px">
                        <Box>
                            <Text>You are logged in as <strong>{user?.name}</strong></Text>
                        </Box>
                        <Box>
                            <Link
                                as={RouterLink}
                                to="/profile"
                                variant="outline"
                                mt={3}
                                mr={2}
                            >
                                Complete Profile
                            </Link>
                            <LogoutButton />
                        </Box>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        ) : null
    );
}

export default ProfileMini;
