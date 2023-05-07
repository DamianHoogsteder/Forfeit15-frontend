import React, {useState, useEffect} from 'react';
import {Box, Flex, Grid, Stack} from '@chakra-ui/react';
import {FaArrowDown} from 'react-icons/fa';
import ThreadPreview from "../components/threadPreview/threadPreview";
import FeaturedComponent from "../components/featuredComponent/featuredComponent";
import BoldFont from '../fonts/THEBOLDFONT.ttf';

export function Home() {
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
            const scrollThreshold = scrollHeight - clientHeight - 50;
            setShowArrow(scrollTop < scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContent = () => {
        const contentSection = document.getElementById('content-section');
        if (contentSection) {
            const offsetTop = contentSection.offsetTop;
            window.scrollTo({top: offsetTop, behavior: 'smooth'});
        }
    };

    const fontStyles = `
    @font-face {
      font-family: 'THEBOLDFONT';
      src: url(${BoldFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  `;

    const keyframes = `
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }
  `;
    
    return (
        <Box mt={0}>
            <style>{fontStyles}{keyframes}</style>
            <Flex alignItems="center" justifyContent="center" height="100vh" position="relative">
                <Box
                    position="absolute"
                    top="40%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    fontSize="150px"
                    fontWeight="bold"
                    color="white"
                    fontFamily="THEBOLDFONT"
                    textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
                >
                    FORFEIT
                    <Box as="span" color="red.500" textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)">
                        15
                    </Box>
                </Box>
                {showArrow && (
                    <Box
                        position="absolute"
                        bottom="12%"
                        left="50%"
                        transform="translateX(-50%)"
                        textAlign="center"
                        fontSize="2xl"
                        color="white"
                        cursor="pointer"
                        onClick={scrollToContent}
                        animation="bounce 1s infinite alternate"
                    >
                        <FaArrowDown/>
                    </Box>
                )}
            </Flex>
            <Box 
                textAlign="center" 
                fontSize="75px" 
                fontWeight="bold" 
                mb={4}
                color="white"
                fontFamily="THEBOLDFONT"
            >
                <Box as="span" color="red.500" textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)">
                    START
                </Box>
                READING
            </Box>
            <Flex alignItems="center" justifyContent="center" height="100%" id="content-section">
                <Grid templateColumns="3fr 2fr" gap={4}>
                    <Box
                        height="90vh"
                        sx={{
                            overflowY: "auto",
                            maxHeight: "70vh",
                            scrollbarWidth: "auto",
                            scrollbarColor: "#E53E3E #1A202C",
                            paddingRight: "6px",
                        }}
                    >
                        <Stack spacing={4}>
                            {/* Threads to be rendered from backend*/}
                            <ThreadPreview/>
                            <ThreadPreview/>
                            <ThreadPreview/>
                            <ThreadPreview/>
                            <ThreadPreview/>
                            <ThreadPreview/>
                            <ThreadPreview/>
                            <ThreadPreview/>
                            <ThreadPreview/>
                            <ThreadPreview/>
                        </Stack>
                    </Box>
                    <FeaturedComponent/>
                </Grid>
            </Flex>
        </Box>
    );
}