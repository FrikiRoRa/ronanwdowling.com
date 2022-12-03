import * as React from "react";
import {
  Box,
  Container,
  Button,
  WrapItem,
  Stack,
  ButtonGroup,
  Wrap,
  Image,
} from "@chakra-ui/react";

import MainLayout from "../components/MainLayout";

import { useToast } from "@chakra-ui/react";

import pictureOfMe from "../images/me.jpg";

import "../style/style.css";

const IndexPage = () => {
  // variables area
  const toast = useToast();
  // functions area

  // return the html
  return (
    <MainLayout>
      <Box>
        <Container maxWidth={800}>
          <Box>Blah Blah Blah, I am a programmer</Box>
          <Image src={pictureOfMe} />
        </Container>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
