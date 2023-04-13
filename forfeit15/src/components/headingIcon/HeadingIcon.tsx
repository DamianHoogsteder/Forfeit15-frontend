import React from "react";
import {Box, Image} from "@chakra-ui/react";


export default function HeadingIcon() {
    return (
        <Box bg="grey.400" width={300} height={150} mx="auto" mb={5}>
            <Image
                src="https://via.placeholder.com/300x150"
                alt="example image"
                w={300}
                h={150}
                borderRadius="md"
                boxShadow="md"
            />
        </Box>
    );
}