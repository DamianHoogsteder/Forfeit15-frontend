import React from "react";
import {Box} from "@chakra-ui/react";
import ProfileForm from "../components/profileComponent/ProfileForm";

export function Profile() {
    return (
        <Box
            height="90vh"
        >
            <ProfileForm />
        </Box>
    );
}

export default Profile;