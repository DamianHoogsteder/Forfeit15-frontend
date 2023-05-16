import {useAuth0} from '@auth0/auth0-react';
import {Button} from "@chakra-ui/react";
import React from "react";
import ProfileMini from "../profileMini/profileMini";

const loginButton = () =>
{
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    
    return(
        !isAuthenticated ? (
            <Button 
                rounded="4px" 
                colorScheme="red"
                onClick={() => loginWithRedirect()}
            >
                Login
            </Button>
        ) : <ProfileMini />
    )
}

export default loginButton;