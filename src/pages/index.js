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

import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

import { useToast } from "@chakra-ui/react";

import pictureOfMe from "../images/me.jpg";

import "../style/style.css";

const IndexPage = () => {
  // variables area
  const toast = useToast();
  // functions area

  // return the html
  return (
    <>
      <Header />
      <Box bgColor={"#def7ff"}>
        <Container maxWidth={800}>
          <Box>Blah Blah Blah, I am a programmer</Box>
          <Image src={pictureOfMe} />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
