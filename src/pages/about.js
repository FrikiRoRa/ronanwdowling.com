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
import spanishIcon from "../images/achievementIcons/spanish.png";
import programmingIcon from "../images/achievementIcons/programming.png";
import volleyballIcon from "../images/achievementIcons/volleyball.png";
import hapkidoIcon from "../images/achievementIcons/hapkido.png";
import bikingIcon from "../images/achievementIcons/biking.png";
import basketballIcon from "../images/achievementIcons/basketball.png";
import soccerIcon from "../images/achievementIcons/soccer.png";
import pianoIcon from "../images/achievementIcons/piano.png";
import { achievements } from "../achievementData";
import communityService from "../images/achievementIcons/communityService.png";
import AchievementCard from "../components/achievementCard";

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
                <Box display="flex" gap={"20px"}>
                  <AchievementCard
                    icon={volleyballIcon}
                    onClick={() => handleOpenModal("volleyball")}
                    buttonLabel={"Volleyball"}
                  />
                  <AchievementCard
                    icon={hapkidoIcon}
                    onClick={() => handleOpenModal("hapkido")}
                    buttonLabel={"Hapkido"}
                  />
                  <AchievementCard
                    icon={basketballIcon}
                    onClick={() => handleOpenModal("basketball")}
                    buttonLabel={"Basketball"}
                  />
                  <AchievementCard
                    icon={bikingIcon}
                    onClick={() => handleOpenModal("biking")}
                    buttonLabel={"Biking"}
                  />
                  <AchievementCard
                    icon={soccerIcon}
                    onClick={() => handleOpenModal("soccer")}
                    buttonLabel={"Soccer"}
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box display={"flex"} gap={"20px"}>
                  <AchievementCard
                    icon={pianoIcon}
                    onClick={() => handleOpenModal("piano")}
                    buttonLabel={"Piano"}
                  />
                  <AchievementCard
                    icon={programmingIcon}
                    onClick={() => handleOpenModal("programming")}
                    buttonLabel={"Programming"}
                  />
                  <AchievementCard
                    icon={spanishIcon}
                    onClick={() => handleOpenModal("spanish")}
                    buttonLabel={"Spanish"}
                  />
                  <AchievementCard
                    icon={communityService}
                    onClick={() => handleOpenModal("communityService")}
                    buttonLabel={"Community Service"}
                  />{" "}
                </Box>
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
