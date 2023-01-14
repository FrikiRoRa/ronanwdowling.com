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
import books from "../images/achievementIcons/books.png";
import AchievementCard from "../components/achievementCard";
import readingMountains from "../images/readingMountains.jpeg";
import { faBookSkull } from "@fortawesome/free-solid-svg-icons";
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
              <Tab>This Website</Tab>
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
                      of PC gaming, I enjoy school sports, and every year I make
                      sure to do every sport that is offered by the school. I
                      still play even this year when there is a lot more
                      homework. These sports are Soccer, Volleyball, Basketball
                      and Flag Football.
                    </Text>
                    <Image width="50%" src={readingMountains} />
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
                    icon={books}
                    onClick={() => handleOpenModal("reading")}
                    buttonLabel={"Reading"}
                  />
                  <AchievementCard
                    icon={communityService}
                    onClick={() => handleOpenModal("communityService")}
                    buttonLabel={"Community Service"}
                  />{" "}
                </Box>
              </TabPanel>
              <TabPanel>
                <Text>
                  I created this website with Gatsby, React, and Chakra UI.
                </Text>
                <Box
                  display="flex"
                  gap="16px"
                  padding="16px"
                  justifyContent={"center"}
                  marginBottom="16px"
                >
                  <Image
                    width="100px"
                    src="https://camo.githubusercontent.com/b0972dd62bbf6ee0e28ed0ebceb48427a481568caeeb639066b23c754f0c60e5/68747470733a2f2f7777772e6761747362796a732e636f6d2f4761747362792d4d6f6e6f6772616d2e737667"
                  ></Image>
                  <Image
                    width="100px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  ></Image>
                  <Image
                    width="100px"
                    src="https://c.neevacdn.net/image/fetch/s--klaWNbsB--/https%3A//opencollective-production.s3.us-west-1.amazonaws.com/d9875b30-d156-11e9-9bd6-9b3137b96616.png?savepath=d9875b30-d156-11e9-9bd6-9b3137b96616.png"
                  ></Image>
                </Box>
                <Text>
                  The code is hosted on GitHub, and my website is deployed via
                  Netlify.
                </Text>
                <Box
                  display="flex"
                  gap="16px"
                  padding="16px"
                  justifyContent={"center"}
                >
                  <Image
                    width="100px"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  ></Image>
                  <Image
                    width="100px"
                    src="https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg"
                  ></Image>
                </Box>
                <Text marginBottom={"16px"}>
                  To create websites like this, I needed to learn the basics of
                  HTML, JavaScript, and CSS. I chose to learn these skills for
                  my 7th grade QED project. HTML is the language that is used to
                  put content and images on the website, while CSS is what I
                  used to customize their appearance, and JS enables the
                  interactive parts.
                </Text>
                <Text marginBottom={"16px"}>
                  After learning the basics, I started learning React, Gatsby,
                  and ChakraUI, which are basically tools built on top of HTML,
                  CSS, and JavaScript. They take care of some of the more
                  tedious bits about web development, and allow me to add more
                  complex features to my page.
                </Text>
                <Text>
                  Throughout me building the website, I frequently save my code
                  to GitHub, which backs up my code on the internet. Every time
                  I push a new update, my code is automatically deployed to my
                  website by Netlify, which talks to GitHub to get the new
                  updates.
                </Text>
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
