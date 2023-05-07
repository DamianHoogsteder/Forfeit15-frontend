import {
    Box,
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Text, useColorModeValue
} from "@chakra-ui/react";
import {BellIcon, CloseIcon} from "@chakra-ui/icons";
import React, {useEffect, useState} from "react";
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";

interface PatchMessage {
    Type: string;
    UserId: string;
    Title: string | null;
    Description: string | null;
    TimeStamp: string;
}

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

export default function Notifications() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [notifications, setNotifications] = useState<PatchMessage[]>([]);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7088/updatehub')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    const userId = "089d2e27-be98-4f8d-a3dc-1535127b0e9e"
                    connection.invoke("Connect", userId);

                    connection.on('ReceiveMessage', message => {
                        const patchUpdate: PatchMessage = JSON.parse(message);
                        setNotifications((prevNotifications) => [...prevNotifications, patchUpdate]);
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
        <Popover
            isOpen={showNotifications}
            onClose={() => setShowNotifications(false)}
        >
            <PopoverTrigger>
                <Button
                    position="relative"
                    variant="ghost"
                    aria-label="Notifications"
                    _hover={{bg: 'transparent'}}
                    onClick={() => setShowNotifications(!showNotifications)}
                >
                    <Box position="relative">
                        <BellIcon
                            boxSize={5}
                            color={iconColor}
                            _hover={{color: iconHoverColor}}
                        />
                        {notifications.length > 0 && (
                            <span
                                style={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: '90%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    fontSize: '10px',
                                    padding: '2px',
                                }}
                            >
                {notifications.length}
            </span>
                        )}
                    </Box>
                </Button>
            </PopoverTrigger>
            <PopoverContent bg={bg} color={color} border="none">
                <PopoverArrow
                    bg={bg}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        left: '-4px',
                        top: '-4px',
                        border: 'inherit'
                    }}
                    _after={{content: '""', position: 'absolute', left: '-2px', top: '-2px', border: 'inherit'}}
                />
                <PopoverHeader><Text as='b'>Notifications</Text></PopoverHeader>
                <PopoverBody
                    css={{
                        maxHeight: '200px',
                        overflowY: 'auto',
                        scrollbarWidth: 'thin',
                    }}
                >
                    {notifications.length === 0 ? (
                        <Text>No notifications currently.</Text>
                    ) : (
                        notifications.map((notification) => (
                            <div key={notification.TimeStamp} className="notification-item">
                                <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <Text as='b'>{notification.Title}</Text>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <Text>{formatTimestamp(notification.TimeStamp)}</Text>
                                        <CloseIcon
                                            boxSize={3}
                                            color="gray.400"
                                            cursor="pointer"
                                            ml={2}
                                            onClick={() => {
                                                setNotifications((prevNotifications) => prevNotifications.filter((item) => item.TimeStamp !== notification.TimeStamp));
                                            }}
                                        />
                                    </div>
                                    )
                                </Box>
                                <Text>{notification.Description}</Text>
                                <Text>You were subscribed to: {notification.Type}</Text>
                            </div>
                        ))
                    )}
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}