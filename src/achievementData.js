import volleyballImg from "./images/achievementBanner/Volleyball.jpg"; // Tell webpack this JS file uses this image
import programmingImg from "./images/achievementBanner/programming.jpg"; // Tell webpack this JS file uses this image
import pianoImg from "./images/achievementBanner/piano.jpg"; // Tell webpack this JS file uses this image
import soccer from "./images/achievementBanner/soccer.jpg";
import hapkido from "./images/achievementBanner/hapkido.jpg";
import communityservice from "./images/achievementBanner/communityservice.jpg";
import biking from "./images/achievementBanner/biking.jpg";
import spanish from "./images/achievementBanner/spanish.jpg";
import basketball from "./images/achievementBanner/basketball.jpg";
import summerReading from "./images/achievementBanner/summerReading.jpg";
import boysGirlClub from "./images/achievementBanner/Club.jpeg";

export const achievements = {
  programming: {
    name: "Programming",
    description:
      "I have been programming for almost a year, and I've learned the basics of JavaScript, HTML and CSS!",
    bulletPoints: [
      "Dec 2021 - Started QED Programming Project.",
      "April 2022 - Deployed my first website to the web!",
      "May 2022 - Started to learn intermediate JavaScript and React.",
      "Sept 2022 - Published my personal site on ronanwdowling.com and React.",
    ],
    iconImg: programmingImg,
  },
  volleyball: {
    name: "Volleyball",
    description:
      "I have been familiar with volleball ever since I was little but I never played competitively until 7th grade where I played through my school. I am also playing again this year when the season starts. I enjoy how intuitive the game is but there is always a way to improve. Most importantly I enjoy playing the sport with my friends for fun.",
    bulletPoints: [
      "I've played volleyball for 10 years now.",
      "I play as the setter position.",
      "After a volleyball game, I love getting cheeseburgers with the team!",
    ],
    iconImg: volleyballImg,
  },
  piano: {
    name: "Piano",
    description: "I've been learning piano for over 5 years.",
    bulletPoints: [
      "My favorite musicians are Stevie Wonder and Mozart.",
      "I love playing for my classmates at Crane's Music Hour, an open-mic for student musicians.",
      "The most recent piece I've been practicing is Wet Hands from Minecraft.",
      "For over a year I have been learning how to compose music with Logix Pro X.",
    ],
    iconImg: pianoImg,
  },
  hapkido: {
    name: "Hapkido",
    description:
      "I have been doing hapkido for over seven years and I achieved my black belt when I was only in 6th grade.",
    bulletPoints: [
      "I have been doing hapkido since I was five.",
      "During the pandemic I would do the lessons online.",
      "The most challenging part of the black belt test is to do a flying side kick to break three boards of wood.",
    ],
    iconImg: hapkido,
  },
  soccer: {
    name: "Soccer",
    description:
      "I have been playing soccer ever since I was in kindergarten through AYSO, but for the last two years I have been playing it through my school.",
    bulletPoints: [
      "I have been playing soccer since I was six.",
      "I play the defensive position in soccer.",
      "I enjoy the way that soccer is structured.",
      "I just completed the last soccer season for Crane this year.",
    ],
    iconImg: soccer,
  },
  communityService: {
    name: "Community Service",
    description:
      "Since I was young I would go to the Unity Shoppe to help stock the shelves.",
    bulletPoints: [
      "The first time I had went to Unity Shoppe is when I was just eight.",
      "The Unity Shoppe helps feed the people who can not buy food and they make it feel like a shop.",
      "This year before winter break my school took us to the Unity shoppe and I bagged some carrots.",
    ],
    iconImg: communityservice,
  },
  Charity: {
    name: "Boys and Girls Club",
    description:
      "After getting about 600 dollars from a snack shack that the student council members ran, we went to our nearest Boys and Girls club to donate it!",
    bulletPoints: [
      "When we arrived, we got a tour and met a few kids going there.",
      "All the kids were in the gymnasium expecting us and we gave a short speech about what we did and how we got the money.",
    ],
    iconImg: boysGirlClub,
  },
  biking: {
    name: "Biking",
    description:
      "I have loved to bike ever since I was young, but during covid I was busy trying to get my black belt. Although in 7th grade I got back into it and fell in love again.",
    bulletPoints: [
      "The thing that got me inspired to get back into riding was a E-Block where we bike around the neighborhood where my school is.",
      "I ride my bike around my neighborhood whenever I get a chance, especially in the afternoon.",
    ],
    iconImg: biking,
  },
  spanish: {
    name: "Spanish",
    description:
      "Ever since I was a little I have been surrounded by Spanish speakers, like the daycare I went to in San Francisco when I was very young.",
    bulletPoints: [
      "I have been studying Spanish since I was in kindergarten.",
      "When I was in sixth grade I was surprised to discover that I got in the 95th percentile of the Nation Spanish Exam.",
      "One of my favorite aspects of learning Spanish is leaarning about all the different cultures and traditions that Spanish speaking countries have such as Day of the Dead or Día de los Muertos.",
    ],
    iconImg: spanish,
  },
  basketball: {
    name: "Basketball",
    description:
      "I have not been playing basketball for long, just for two years. This year is the first year where I played varsity basketeball",
    bulletPoints: [
      "Throghout the two years of playing basketball with my school I have improved a lot.",
      "I am in the middle of the basketball season this year for my school on the varsity team.",
      "I enjoy playing at the ends of the court to get some shots in.",
    ],
    iconImg: basketball,
  },
  reading: {
    name: "Reading",
    description:
      "I enjoy reading becauase it transports me into different stories and gives me endless hours of entertainment.",
    bulletPoints: [
      "My favorite series that I read this summer was the Ender's Game series.",
      "If somebody in the school acomplishes ten-thousand pages during the summer they get to eat lunch with the headmaster and the other ten-thousand page readers.",
      "I have been reading ten-thousand pages each summer since the summer of going into 2nd grade.",
      "I would need to read about 120 pages a day to reach that goal.",
    ],
    iconImg: summerReading,
  },
};
