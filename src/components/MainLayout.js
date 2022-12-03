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

import Header from "../components/header";
import Footer from "../components/footer";

import "../style/style.css";

const MainLayout = (props) => {
  // return the html
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      minHeight={"100vh"}
      bgColor={"#31363b"}
    >
      <Header />
      {props.children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
