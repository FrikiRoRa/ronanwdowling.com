import * as React from "react";

import {
  Box,
  ListItem,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
} from "@chakra-ui/react";
export default function AchievementCard(props) {
  return (
    <Box
      display="flex"
      flexDir={"column"}
      alignItems="center"
      padding={"8px"}
      backgroundColor={"grey"}
      borderRadius={"8px"}
    >
      <Image src={props.icon} width={"50px"} marginBottom={"16px"} />
      <Button bgColor="orange" onClick={props.onClick}>
        {props.buttonLabel}
      </Button>
    </Box>
  );
}
