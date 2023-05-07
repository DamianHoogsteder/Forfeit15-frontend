import PreferencesForm from "../components/Forms/PreferenceForm/PreferencesForm";
import React from "react";
import {Box} from "@chakra-ui/react";

export function Settings() {
    return (
        <Box
        height="90vh"
        >

            <PreferencesForm />
        </Box>
    );
}

export default Settings;