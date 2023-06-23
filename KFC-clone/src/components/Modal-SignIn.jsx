import {
  useDisclosure,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { ToastExample } from "./reg-toast";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import React from "react";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Modal_SignIn({ number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [pin, setPin] = React.useState("");
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            handleClick();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function handleClick() {
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+" + number;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        onOpen();
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  }

  function handlePinChange(value) {
    setPin(value);
  }
  return (
    <>
      <div id="recaptcha-container"></div>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        Send Me a Code
      </Button>

      <Modal
        size={"4xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent border={"2px solid white"}>
          <div style={{ border: "3px solid white" }}>
            <ModalHeader
              fontSize={"30px"}
              fontWeight="700"
              textAlign={"center"}
            >
              WE JUST TEXTED YOU
            </ModalHeader>
          </div>
          <ModalCloseButton />
          <ModalBody display={"grid"} justifyContent="left">
            <Text>Enter the OTP received on {number}</Text>
            <br></br>
            <HStack>
              <PinInput onChange={handlePinChange} size="lg">
                {[...Array(6)].map((_, index) => (
                  <PinInputField
                    key={index}
                    value={pin[index]}
                    type="text"
                    show={pin.length > index}
                  />
                ))}
              </PinInput>
            </HStack>
            <Text as="u">Resend the code</Text>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent="center">
            <ToastExample pin={pin} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Modal_SignIn;
