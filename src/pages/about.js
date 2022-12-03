import * as React from "react";

import {
  Box,
  Button,
  Container,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import MainLayout from "../components/MainLayout";

import AchievementModal from "../components/achievementModal";

import volleyballPic from "../images/volleyball.png";

import { achievements } from "../achievementData";

export default function AboutPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedActivity, setSelectedActivity] = React.useState(
    achievements["programming"]
  );

  function handleOpenModal(activityName) {
    setSelectedActivity(achievements[activityName]);
    onOpen();
  }

  return (
    <MainLayout>
      <Box bgColor={"#31363b"}>
        <Container maxWidth={800}>
          <Tabs>
            <TabList>
              <Tab>About Me</Tab>
              <Tab>Sports</Tab>
              <Tab>Academics</Tab>
              <Tab>Music</Tab>
              <Tab>Programming</Tab>
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
                <Button
                  bgColor="teal"
                  onClick={() => handleOpenModal("volleyball")}
                >
                  Volleyball
                </Button>
              </TabPanel>
              <TabPanel>
                <Button bgColor="orange" onClick={onOpen}>
                  Open Modal
                </Button>
              </TabPanel>
              <TabPanel>
                <Button bgColor="teal" onClick={() => handleOpenModal("piano")}>
                  Piano
                </Button>
              </TabPanel>
              <TabPanel>
                <Button
                  bgColor="orange"
                  onClick={() => handleOpenModal("programming")}
                >
                  Programming
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
      <AchievementModal
        isOpen={isOpen}
        onClose={onClose}
        activityName={selectedActivity.name}
        description={selectedActivity.description}
        bulletPoints={selectedActivity.bulletPoints}
        iconImg={selectedActivity.iconImg}
      />
    </MainLayout>
  );
}
