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
} from "@chakra-ui/react";

export default function AchievementModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"#31363b"}>
        <ModalHeader backgroundColor={"#F4BFA1"}>
          <Box display="flex" alignItems={"center"}>
            <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" />
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Programming</Text>
          <Text>
            I have been programming for almost a year, and I've learned the
            basics of JavaScript, HTML, and CSS!
          </Text>
          <UnorderedList>
            <ListItem>
              Sept 2022 - Published my personal site on ronanwdowling.com and
              React
            </ListItem>
            <ListItem>
              May 2022 - Started to learn intermediate JavaScript and React
            </ListItem>
            <ListItem>
              April 2022 - Deployed my first website to the web!
            </ListItem>
            <ListItem>Dec 2021 - Started QED Programming Project</ListItem>
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
