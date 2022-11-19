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

import Header from "../components/header";
import Footer from "../components/footer";
import AchievementModal from "../components/achievementModal";

import volleyballPic from "../images/volleyball.png";

import { achievements } from "../achievementData";

export default function AboutPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const bulletPointList = [
    "Sept 2022 - Published my personal site on ronanwdowling.com and React",
    "May 2022 - Started to learn intermediate JavaScript and React",
    "April 2022 - Deployed my first website to the web!",
    "Dec 2021 - Started QED Programming Project",
  ];

  return (
    <>
      <Header />
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
                <Button bgColor="orange" onClick={onOpen}>
                  Open Modal
                </Button>
                <AchievementModal
                  isOpen={isOpen}
                  onClose={onClose}
                  activityName="Programming"
                  description="I have been programming for almost a year, and I've learned the
                  basics of JavaScript, HTML, and CSS!"
                  bulletPoints={bulletPointList}
                  iconImg="https://c.neevacdn.net/image/fetch/s--L4_gxJGo--/https%3A//cdn2.iconfinder.com/data/icons/user-interface-web/550/user-interface-web_11-512.png?savepath=user-interface-web_11-512.png"
                />
                <Button bgColor="teal" onClick={onOpen2}>
                  Open Modal
                </Button>
                <AchievementModal
                  isOpen={isOpen2}
                  onClose={onClose2}
                  activityName={achievements.volleyball.name}
                  description={achievements.volleyball.description}
                  bulletPoints={achievements.volleyball.bulletPoints}
                  iconImg={achievements.volleyball.iconImg}
                />
              </TabPanel>
              <TabPanel>
                <Button bgColor="orange" onClick={onOpen}>
                  Open Modal
                </Button>
                <AchievementModal
                  isOpen={isOpen}
                  onClose={onClose}
                  activityName="Programming"
                  description="I have been programming for almost a year, and I've learned the
                  basics of JavaScript, HTML, and CSS!"
                  bulletPoints={bulletPointList}
                  iconImg="https://c.neevacdn.net/image/fetch/s--L4_gxJGo--/https%3A//cdn2.iconfinder.com/data/icons/user-interface-web/550/user-interface-web_11-512.png?savepath=user-interface-web_11-512.png"
                />
                <Button bgColor="teal" onClick={onOpen2}>
                  Open Modal
                </Button>
                <AchievementModal
                  isOpen={isOpen2}
                  onClose={onClose2}
                  activityName={achievements.volleyball.name}
                  description={achievements.volleyball.description}
                  bulletPoints={achievements.volleyball.bulletPoints}
                  iconImg={achievements.volleyball.iconImg}
                />
              </TabPanel>
              <TabPanel>
                <Button bgColor="orange" onClick={onOpen}>
                  Open Modal
                </Button>
                <AchievementModal
                  isOpen={isOpen}
                  onClose={onClose}
                  activityName="Programming"
                  description="I have been programming for almost a year, and I've learned the
                  basics of JavaScript, HTML, and CSS!"
                  bulletPoints={bulletPointList}
                  iconImg="https://c.neevacdn.net/image/fetch/s--L4_gxJGo--/https%3A//cdn2.iconfinder.com/data/icons/user-interface-web/550/user-interface-web_11-512.png?savepath=user-interface-web_11-512.png"
                />
                <Button bgColor="teal" onClick={onOpen2}>
                  Open Modal
                </Button>
                <AchievementModal
                  isOpen={isOpen2}
                  onClose={onClose2}
                  activityName={achievements.volleyball.name}
                  description={achievements.volleyball.description}
                  bulletPoints={achievements.volleyball.bulletPoints}
                  iconImg={achievements.volleyball.iconImg}
                />
              </TabPanel>
              <TabPanel>
                <Button bgColor="orange" onClick={onOpen}>
                  Open Modal
                </Button>
                <AchievementModal
                  isOpen={isOpen}
                  onClose={onClose}
                  activityName="Programming"
                  description="I have been programming for almost a year, and I've learned the
                  basics of JavaScript, HTML, and CSS!"
                  bulletPoints={bulletPointList}
                  iconImg="https://c.neevacdn.net/image/fetch/s--L4_gxJGo--/https%3A//cdn2.iconfinder.com/data/icons/user-interface-web/550/user-interface-web_11-512.png?savepath=user-interface-web_11-512.png"
                />
                <Button bgColor="teal" onClick={onOpen2}>
                  Open Modal
                </Button>
                <AchievementModal
                  isOpen={isOpen2}
                  onClose={onClose2}
                  activityName={achievements.volleyball.name}
                  description={achievements.volleyball.description}
                  bulletPoints={achievements.volleyball.bulletPoints}
                  iconImg={achievements.volleyball.iconImg}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
