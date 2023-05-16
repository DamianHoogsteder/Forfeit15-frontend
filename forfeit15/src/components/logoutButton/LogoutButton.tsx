import {useAuth0} from '@auth0/auth0-react';
import {Icon, Link, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {FiLogOut} from "react-icons/fi";

export default function LogoutButton() {
    const {logout, isAuthenticated} = useAuth0();
    const color = useColorModeValue('white', 'gray.200');
    const activeBg = useColorModeValue('gray.700', 'gray.600');

    return (
        isAuthenticated ? (
            <Link
                rounded="md"
                _hover={{ bg: activeBg }}
            >
                <Icon as={FiLogOut} fontSize="xl" color={color} m="auto" onClick={() => logout()} />
            </Link>
        ) : <></>
    );
}

