import {Flex, Box, Button, Link, useColorModeValue} from '@chakra-ui/react';
import {ArrowDownIcon, SettingsIcon, BellIcon} from '@chakra-ui/icons';
import {Link as RouterLink} from 'react-router-dom';

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
                <Button leftIcon={<ArrowDownIcon/>} rounded="4px" colorScheme="red">
                    Download now
                </Button>
            </Link>
            <Box mr="65">
                <Button
                    leftIcon={<BellIcon color={iconColor} _hover={{color: iconHoverColor}}/>}
                    variant="ghost"
                    aria-label="Notifications"
                    _hover={{bg: 'transparent'}}
                />
                <Button
                    leftIcon={<SettingsIcon color={iconColor} _hover={{color: iconHoverColor}}/>}
                    variant="ghost"
                    aria-label="Settings"
                    _hover={{bg: 'transparent'}}
                />
                <Link as={RouterLink} to="/login">
                    <Button rounded="4px" colorScheme="red">
                        Login
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
}
