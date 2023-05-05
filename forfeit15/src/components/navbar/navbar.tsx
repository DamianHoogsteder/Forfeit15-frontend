import React, { useEffect, useState } from 'react';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {
    Box,
    Button,
    Flex,
    Link,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    useColorModeValue,
} from '@chakra-ui/react';
import { ArrowDownIcon, BellIcon, SettingsIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [notifications, setNotifications] = useState<string[]>([]);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7088/updatehub')
            .withAutomaticReconnect()
            .build();
        console.log(newConnection);
        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');

                    connection.on('ReceiveMessage', message => {
                        console.log(message)
                        setNotifications([...notifications, message])
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);
    
    const handleNotificationsClick = () => {
        setShowNotifications(!showNotifications);
        if (showNotifications) {
            setNotifications([]);
        }
    };

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
                <Popover
                    isOpen={showNotifications}
                    onClose={() => setShowNotifications(false)}
                >
                    <PopoverTrigger>
                        <Button
                            leftIcon={
                                <BellIcon
                                    color={iconColor}
                                    _hover={{color: iconHoverColor}}
                                />
                            }
                            variant="ghost"
                            aria-label="Notifications"
                            _hover={{bg: 'transparent'}}
                            onClick={() => setShowNotifications(!showNotifications)}
                        />
                    </PopoverTrigger>
                    <PopoverContent bg={bg} color={color} border="none">
                        <PopoverArrow
                            bg={bg}
                            _before={{content: '""', position: 'absolute', left: '-4px', top: '-4px', border: 'inherit'}}
                            _after={{content: '""', position: 'absolute', left: '-2px', top: '-2px', border: 'inherit'}}
                        />
                        <PopoverHeader>Notifications</PopoverHeader>
                        <PopoverBody>
                            {notifications.map((notificaition) => (
                                <div>{notificaition}</div>
                            ))}
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
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
                <Link as={RouterLink} to="/login">
                    <Button rounded="4px" colorScheme="red">
                        Login
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}