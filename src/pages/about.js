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
import programmingIcon from "../images/achievementIcons/programming.png";
import volleyballIcon from "../images/achievementIcons/volleyball.png";
import hapkidoIcon from "../images/achievementIcons/hapkido.png";
import bikingIcon from "../images/achievementIcons/biking.png";
import basketballIcon from "../images/achievementIcons/basketball.png";
import soccerIcon from "../images/achievementIcons/soccer.png";

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
              <Tab>Extracurriculars</Tab>
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
                <Box display="flex">
                  <Box
                    display="flex"
                    flexDir={"column"}
                    alignItems="center"
                    padding={"8px"}
                  >
                    <Image src={volleyballIcon} width={"50px"} />
                    <Button
                      bgColor="teal"
                      onClick={() => handleOpenModal("volleyball")}
                    >
                      Volleyball
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    flexDir={"column"}
                    alignItems="center"
                    padding={"8px"}
                  >
                    <Image src={hapkidoIcon} width={"50px"} />
                    <Button
                      bgColor="teal"
                      onClick={() => handleOpenModal("hapkido")}
                    >
                      Hapkido
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    flexDir={"column"}
                    alignItems="center"
                    padding={"8px"}
                  >
                    <Image src={basketballIcon} width={"50px"} />
                    <Button
                      bgColor="orange"
                      onClick={() => handleOpenModal("basketball")}
                    >
                      Basketball
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    flexDir={"column"}
                    alignItems="center"
                    padding={"8px"}
                  >
                    <Image src={bikingIcon} width={"50px"} />
                    <Button
                      bgColor="orange"
                      onClick={() => handleOpenModal("biking")}
                    >
                      Biking
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    flexDir={"column"}
                    alignItems="center"
                    padding={"8px"}
                  >
                    <Image src={soccerIcon} width={"50px"} />
                    <Button
                      bgColor="orange"
                      onClick={() => handleOpenModal("soccer")}
                    >
                      Soccer
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Button bgColor="teal" onClick={() => handleOpenModal("piano")}>
                  Piano
                </Button>
                <Button
                  bgColor="teal"
                  onClick={() => handleOpenModal("programming")}
                >
                  Programming
                </Button>
                <Button
                  bgColor="teal"
                  onClick={() => handleOpenModal("spanish")}
                >
                  Spanish
                </Button>
                <Button
                  bgColor="teal"
                  onClick={() => handleOpenModal("communityService")}
                >
                  Community Service
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
