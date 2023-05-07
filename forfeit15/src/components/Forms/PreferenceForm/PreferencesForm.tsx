import React, {useState} from 'react';
import {Box, Checkbox, Button, Stack, FormControl, FormLabel} from '@chakra-ui/react';
import BoldFont from "../../../fonts/THEBOLDFONT.ttf";
import ThinFont from "../../../fonts/LEMONMILK-Light.otf";

export default function PreferencesForm() {
    const [preferences, setPreferences] = useState<string[]>([]);

    const handlePreferenceChange = (event: any) => {
        const {value, checked} = event.target;
        if (checked) {
            setPreferences((prevPreferences) => [...prevPreferences, value]);
        } else {
            setPreferences((prevPreferences) =>
                prevPreferences.filter((preference) => preference !== value)
            );
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Do something with the selected preferences
        console.log('Selected Preferences:', preferences);
    };

    const fontStyles = `
    @font-face {
      font-family: 'THEBOLDFONT';
      src: url(${BoldFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }    
    @font-face {
      font-family: 'LEMONMILKLIGHT';
      src: url(${ThinFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  `;

    return (
        <Box>
            <style>{fontStyles}</style>
            <Box
                fontSize="75px"
                pt="50px"
                fontWeight="bold"
                mb={4}
                color="white"
                fontFamily="THEBOLDFONT"
            >
                <Box as="span" color="red.500" textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)" mr={3}>
                    LET US KNOW
                </Box>
                WHAT YOU'RE HERE FOR...
            </Box>
            <Box
                borderRadius="md"
                boxShadow="md"
                bg="gray.800"
                h="70vh"
                p={4}
                position="relative"
            >
                <Box
                    bg="red.500"
                    h={4}
                    w={24}
                    borderRadius="md"
                    mb={4}
                />
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel
                                color="white"
                                fontSize="36px"
                                fontFamily="THEBOLDFONT"
                                mb={5}
                            >
                                Preferences
                            </FormLabel>
                            <Checkbox
                                value="game-news"
                                onChange={handlePreferenceChange}
                                isChecked={preferences.includes("game-news")}
                                color="white"
                                fontFamily="LEMONMILKLIGHT"
                            >
                                Game News
                            </Checkbox>
                        </FormControl>
                        <FormControl>
                            <Checkbox
                                value="new-patch"
                                onChange={handlePreferenceChange}
                                isChecked={preferences.includes("new-patch")}
                                color="white"
                                fontFamily="LEMONMILKLIGHT"
                            >
                                New Patch releases
                            </Checkbox>
                        </FormControl>
                        <FormControl>
                            <Checkbox
                                value="champion-update"
                                onChange={handlePreferenceChange}
                                isChecked={preferences.includes("champion-update")}
                                color="white"
                                fontFamily="LEMONMILKLIGHT"
                            >
                                Champion Updates
                            </Checkbox>
                        </FormControl>                       
                        <FormControl>
                            <Checkbox
                                value="champion-update"
                                onChange={handlePreferenceChange}
                                isChecked={preferences.includes("new-champion")}
                                color="white"
                                fontFamily="LEMONMILKLIGHT"
                            >
                                New Champions
                            </Checkbox>
                        </FormControl>
                    </Stack>
                    <Button
                        mt={7}
                        type="submit"
                        colorScheme="red"
                        fontFamily="LEMONMILKLIGHT"
                        position="absolute"
                        bottom={4}
                        left={4}
                        right={4}
                    >
                        Save Preferences
                    </Button>
                </form>
            </Box>
        </Box>


    )
        ;
}