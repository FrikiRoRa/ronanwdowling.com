import * as React from "react";

import { Box, Container } from "@chakra-ui/react";

import { Link } from "gatsby";

export default function Header() {
  return (
    <>
      <Box bgColor={"black"} color="white" padding={"16px"}>
        <Container
          maxWidth={800}
          display="flex"
          justifyContent={"space-between"}
        >
          <Box className="hover-color">
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
