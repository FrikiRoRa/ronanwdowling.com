import * as React from "react";

import { Box, Container } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box bgColor={"#212529"} color="white" padding={"16px"} marginTop="auto">
        <Container maxWidth={800}>© 2022 Ronan Dowling Contact me</Container>
      </Box>
    </>
  );
}
