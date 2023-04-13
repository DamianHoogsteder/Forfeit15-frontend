import * as React from 'react';
import {Box, Image, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react";

type ThreadHeaderProps = {
    handleAddRequestClick: () => void;
};

export default function ThreadContent({handleAddRequestClick}: ThreadHeaderProps) {
    return (
        <Box>
            {/* Component 1*/}
            <Box p={3}>
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                >
                    Patch description
                </Text>
                <Text color="white" lineHeight="tall">
                    Hear ye, hear ye! We’ve successfully managed to reduce the influx of poros (and hats) that tried to
                    take over the Rift this past weekend. We hope you enjoyed the shenanigans while they lasted! Without
                    further ado, let’s get to patch 13.7.
                    <br/>
                    This patch is addressing quite a few popular junglers in professional play like Vi, Sejuani, and
                    everyone’s favorite monk, Lee Sin. We’re starting balance work now to get the meta in good shape for
                    the 2023 Mid-Season Invitational, which means knocking top tier picks down a few pegs. You can also
                    expect some more pro-oriented buffs coming in the next few patches.
                    <br/>
                    But it’s not all about MSI! We also have some other changes this patch like making Rammus a bit
                    softer, bugfixing Kha’Zix, and a new batch of April Fools skins. The next Clash Cup is also around
                    the corner this weekend, and as a final reminder, all 32-bit clients will no longer be supported as
                    of April 4 when patch 13.7 rolls out, read more details further below. And last but certainly not
                    least, the Season 2023 Split 1 End is coming in 104 days, so I hope your climb is going well.
                    <br/>
                    Have you had a chance to check out the new TFT mid-set yet? If not, you can take this portal to get
                    up to speed on the latest TFT patch notes here!
                </Text>
            </Box>

            {/* Component 2*/}
            <Box p={3}>
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                >
                    Changes made this patch
                </Text>
                <UnorderedList color="white">
                    <ListItem>Riven - Q 200 {'-->'} 300</ListItem>
                    <ListItem>Riven - Q 200 {'-->'} 300</ListItem>
                    <ListItem>Riven - Q 200 {'-->'} 300</ListItem>
                    <ListItem>Riven - Q 200 {'-->'} 300</ListItem>
                </UnorderedList>
            </Box>

            {/* Component 3*/}
            <Box p={3}>
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                >
                    Skin Splash art's
                </Text>
                <VStack spacing={4}>
                    <Image
                        src="https://cdnb.artstation.com/p/assets/images/images/029/676/303/large/west-studio-weststudio-lol-splash-04.jpg?1598307689"
                        alt="Darius"
                        w="90%"
                        h="90%"
                        objectFit="cover"
                    />
                    <Image
                        src="https://cdnb.artstation.com/p/assets/images/images/029/676/315/large/west-studio-weststudio-lol-splash-10.jpg?1598307707"
                        alt="Nidalee"
                        w="90%"
                        h="90%"
                        objectFit="cover"
                    />
                </VStack>

            </Box>

            <Box
                bg="gray.700"
                _hover={{
                    bg: "gray.600",
                }}
                borderRadius="md"
                textAlign="center"
                marginTop={{base: "50px", md: "25px"}}
                onClick={handleAddRequestClick}
                m={3}
            >
                <Box
                    bg="red.500"
                    w={12}
                    h={12}
                    mt={1}
                    borderRadius="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        as="span"
                        fontSize="2xl"
                        fontWeight="bold"
                        color="white"
                    >
                        +
                    </Box>
                </Box>
                <Box>
                    <Text
                        fontSize="xl"
                        color="white"
                    >
                        Add another node to this patch
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};