import * as React from "react";

import {
  Box,
  Container,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Image,
} from "@chakra-ui/react";

import Header from "../components/header";
import Footer from "../components/footer";

import volleyballPic from "../images/volleyball.png";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Box bgColor={"#def7ff"}>
        <Container maxWidth={800}>
          <Tabs>
            <TabList>
              <Tab>About Me</Tab>
              <Tab>Achievements</Tab>
              <Tab>Setup</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box>
                  <Text fontSize="4xl" marginBottom={"16px"}>
                    Ronan Dowling
                  </Text>
                  <Box display={"flex"}>
                    <Text>
                      I was born in San Francisco, CA. When I was still young I
                      moved to Santa Barbara where I now go to school. I am fond
                      of PC gaming, I enojoy the my school sports, every year I
                      make sure to do every sport that is offered by the school.
                      Even this year when there is five times as much homework.
                      These sports are Soccer, Volleyball, Basketball and flag
                      football. Football.
                    </Text>
                    <Image width="50%" src={volleyballPic} />
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={5} shadow="md" borderWidth="1px">
                  <Text fontSize="xl">
                    National Spanish Exam Award - ORO Ribbon
                  </Text>
                  <Text mt={4}>
                    Awarded to students scoring at or above the 95th percentile
                  </Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px">
                  <Text fontSize="xl">Hapkido Black Belt</Text>
                  <Text mt={4}>
                    Practicing since 2011, earned the black belt in 2019.
                  </Text>
                </Box>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
