import * as React from "react";

import { Box, Container } from "@chakra-ui/react";

import Header from "../components/header";
import Footer from "../components/footer";

import pictureOfMe from "../images/me.jpg";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Box bgColor={"#def7ff"}>
        <Container maxWidth={800}>
          <Box>About me</Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
