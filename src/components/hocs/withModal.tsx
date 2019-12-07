import * as React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton
} from "@chakra-ui/core";

export interface WithModalProps {
  blockScrollOnMount?: boolean;
  isOpen: boolean;
  size?: string;
  onClose?(event: React.MouseEvent | React.KeyboardEvent): void | undefined;
  onOpen?(): void;
}

const withModal = (
  WrappedComponent: any,
  {
    blockScrollOnMount = false,
    isOpen,
    size = "full",
    onClose,
    onOpen
  }: WithModalProps
) => {
  const WithModal = () => {
    return (
      <Modal
        blockScrollOnMount={blockScrollOnMount}
        isOpen={isOpen}
        onClose={onClose}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WrappedComponent />
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  return WithModal;
};

export default withModal;
