import * as React from "react";

import { Box, Container } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box bgColor={"black"} color="white" padding={"16px"}>
        <Container maxWidth={800}>© 2022 Ronan Dowling Contact me</Container>
      </Box>
    </>
  );
}
