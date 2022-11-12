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
  Text,
  Image,
} from "@chakra-ui/react";

export default function AchievementModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"#31363b"}>
        <ModalHeader backgroundColor={"#F4BFA1"} borderTopRadius={"inherit"}>
          <Box display="flex" justifyContent={"center"}>
            <Image width="200px" src={props.iconUrl} />
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={"16px"}>
          <Text fontSize="2xl" fontWeight={"bold"}>
            {props.activityName}
          </Text>
          <Text mb="16px">{props.description}</Text>
          <hr />
          <UnorderedList mt="16px">
            {props.bulletPoints.map(function (bulletPoint, i) {
              return <ListItem key={i}>{bulletPoint}</ListItem>;
            })}
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
