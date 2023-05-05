// @flow
import * as React from 'react';
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from "@chakra-ui/react";

type InfoNodeFormProps = {
    isModalOpen: boolean;
    handleCloseModal: () => void;
};

export default function InfoNodeForm({isModalOpen, handleCloseModal}: InfoNodeFormProps) {
    return (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} isCentered>
            <ModalOverlay/>
            <ModalContent bg="gray.100" color="red.500">
                <ModalHeader>This is the modal header</ModalHeader>
                <ModalBody>
                    This is the modal body. You can put any content you want here.
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};