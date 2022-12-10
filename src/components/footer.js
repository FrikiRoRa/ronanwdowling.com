import * as React from "react";

import { Box, Container, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <Box bgColor={"#212529"} color="white" padding={"16px"} marginTop="auto">
        <Container maxWidth={800}>
          <Text>© 2022 Ronan Dowling</Text>
          <Link href="mailto:frikirora@gmail.com">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Link>
          <Link href="https://github.com/frikirora">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Link>
        </Container>
      </Box>
    </>
  );
}
