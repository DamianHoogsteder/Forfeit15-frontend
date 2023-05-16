import {useAuth0} from '@auth0/auth0-react';
import {Box, Button, VStack, Text, Image, Flex} from "@chakra-ui/react";
import React from "react";
import BoldFont from "../../fonts/THEBOLDFONT.ttf";

const ProfileForm = () => {
    const {user, isAuthenticated} = useAuth0();
    
    const fontStyles = `
    @font-face {
      font-family: 'THEBOLDFONT';
      src: url(${BoldFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  `;
    
    return (
        isAuthenticated ? (
            <Box>
                <style>{fontStyles}</style>
                <Box bg="gray.900" p={4} mt={4} borderRadius="20px">
                    <Text color="white"
                          fontSize="28px"
                          fontFamily="THEBOLDFONT">Your profile</Text>
                </Box>
                <Box bg="gray.700" p={8} mt={4} borderRadius="md">
                    <Flex align="center">
                        <Image src={user?.picture} alt={user?.name} boxSize="150px" borderRadius="full"/>
                        <VStack spacing={2} align="start" ml={4}>
                            <Text fontSize="28px" fontWeight="bold" fontFamily="THEBOLDFONT" color="white">{user?.name}</Text>
                            <Text color="white">{user?.email}</Text>
                        </VStack>
                    </Flex>
                    <VStack spacing={2} align="start" mt={8}>
                        <Text color="white">Nickname: {user?.nickname}</Text>
                        <Text color="white">Given Name: {user?.given_name}</Text>
                        <Text color="white">Family Name: {user?.family_name}</Text>
                        {user?.phone_number && <Text color="white">Phone Number: {user?.phone_number}</Text>}
                    </VStack>
                </Box>
            </Box>
        ) : null
    );
}

export default ProfileForm;
