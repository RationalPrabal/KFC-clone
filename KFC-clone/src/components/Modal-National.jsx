import {
  useDisclosure,
  Modal,
  Input,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import InitialFocuss from "./Modal-Delivery";
import React from "react";
function InitialFocus({ location }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      {location == "details" ? (
        <Button
          m="auto"
          onClick={onOpen}
          borderRadius={"20"}
          width="50%"
          colorScheme="black"
          variant="outline"
        >
          Redeem
        </Button>
      ) : location == "checkout" ? (
        <Button
          onClick={onOpen}
          mt={{ base: "100", sm: "50" }}
          borderRadius={"30"}
          w={"100px"}
          colorScheme="red"
        >
          Checkout
        </Button>
      ) : (
        <Button
          onClick={onOpen}
          borderRadius={"20"}
          width="38%"
          colorScheme="black"
          variant="outline"
        >
          Redeem
        </Button>
      )}

      <Modal
        size={"4xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <div style={{ border: "3px solid white" }}>
            <ModalHeader
              fontSize={"30px"}
              fontWeight="700"
              textAlign={"center"}
            >
              START YOUR ORDER
            </ModalHeader>
          </div>
          <ModalCloseButton />
          <ModalBody textAlign={"center"}>
            <Text fontWeight={"700"} fontSize={"30px"}>
              HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?
            </Text>
            <InitialFocuss />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default InitialFocus;
