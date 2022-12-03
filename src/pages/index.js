import * as React from "react";
import {
  Box,
  Container,
  Button,
  WrapItem,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

import MainLayout from "../components/MainLayout";

import { useToast } from "@chakra-ui/react";

import familyBeach from "../images/family_beach.jpg";

import "../style/style.css";

const IndexPage = () => {
  // variables area
  const toast = useToast();
  // functions area

  // return the html
  return (
    <MainLayout>
      <Box>
        <Container maxWidth={800} paddingY="16px">
          <Heading>Hi! I'm Ronan</Heading>
          <Heading>Welcome to my personal website</Heading>
        </Container>
        <Box width="100%" height="500px" overflow={"hidden"}>
          <Image src={familyBeach} />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
