import * as React from "react";

import { Box, Container } from "@chakra-ui/react";

import { Link } from "gatsby";

export default function Header() {
  return (
    <>
      <Box bgColor={"#212529"} color="white" padding={"16px"}>
        <Container
          maxWidth={800}
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Box
            className="hover-color"
            fontFamily="chivo"
            fontSize={"24px"}
            fontWeight="bold"
            display={"flex"}
            alignItems="center"
          >
            <Box
              display={"inline-block"}
              fontSize="36px"
              color="black"
              bgColor="white"
              height="48px"
              width="48px"
              textAlign={"center"}
              lineHeight={"48px"}
              marginRight="8px"
            >
              R
            </Box>
            <Link to="/">Ronan</Link>
          </Box>
          <Box display="flex" gap="16px">
            <Link to="/about" className="hover-color">
              About
            </Link>
            <Link to="/mycats" className="hover-color">
              Cats
            </Link>
            <Link to="/game" className="hover-color">
              Number Guessing Game
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}
