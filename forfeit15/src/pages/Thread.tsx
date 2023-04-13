import React, {useState} from "react";
import {
    Box,
    Flex,
    Grid
} from "@chakra-ui/react";
import FeaturedComponent from "../components/featuredComponent/featuredComponent";
import HeadingIcon from "../components/headingIcon/HeadingIcon";
import InfoNodeForm from "../components/Forms/InfoNodeForm/InfoNodeForm";
import ThreadContent from "../components/threadContent/threadHeader";
import ThreadHeader from "../components/threadHeaders/threadHeader";

export default function Thread() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddRequestClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box mt={0}>
            <HeadingIcon/>

            <Flex alignItems="center" justifyContent="center" height="100%" mt={0}>
                <Grid templateColumns={{base: "1fr", md: "3fr 2fr"}} gap={4}>

                    {/* Patch note content, left box */}
                    <Box
                        bg="gray.800"
                        height={{base: "auto", md: "100%"}}
                        width={{base: "100%", md: "40vw"}}
                        borderRadius="md"
                        boxShadow="md"
                        position="relative"
                    >
                        <ThreadHeader
                        />
                        <ThreadContent
                            handleAddRequestClick={handleAddRequestClick}
                        />
                    </Box>
                    {/* Featured components, right box */}
                    <FeaturedComponent/>
                </Grid>
            </Flex>
            <InfoNodeForm
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
            />
        </Box>

    );
}