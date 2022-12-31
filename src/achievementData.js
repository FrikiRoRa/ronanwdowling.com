import volleyballImg from "./images/achievementBanner/Volleyball.jpg"; // Tell webpack this JS file uses this image
import programmingImg from "./images/achievementBanner/programming.jpg"; // Tell webpack this JS file uses this image
import pianoImg from "./images/achievementBanner/piano.jpg"; // Tell webpack this JS file uses this image
import soccer from "./images/achievementBanner/soccer.jpg";
import hapkido from "./images/achievementBanner/hapkido.jpg";
import communityservice from "./images/achievementBanner/communityservice.jpg";
import biking from "./images/achievementBanner/biking.jpg";
import spanish from "./images/achievementBanner/spanish.jpg";
import basketball from "./images/achievementBanner/basketball.jpg";
export const achievements = {
  programming: {
    name: "Programming",
    description:
      "I have been programming for almost a year, and I've learned the basics of JavaScript, HTML, and CSS!",
    bulletPoints: [
      "Sept 2022 - Published my personal site on ronanwdowling.com and React",
      "May 2022 - Started to learn intermediate JavaScript and React",
      "April 2022 - Deployed my first website to the web!",
      "Dec 2021 - Started QED Programming Project",
    ],
    iconImg: programmingImg,
  },
  volleyball: {
    name: "Volleyball",
    description:
      "I was familiar with volleball when I was a kid but I never actually played real games until 7th and now 8th grade where I play for my school. I enjoy how simple the game and yet there is always a way to improve. Most importantly I just enjoy playing the sport with my friends for fun.",
    bulletPoints: [
      "I've played volleyball for 10 years now",
      "I play in the setter position",
      "Whenever we play volleyball, I love getting cheeseburgers after with the team!",
    ],
    iconImg: volleyballImg,
  },
  piano: {
    name: "Piano",
    description: "I've been learning piano for over 5 years.",
    bulletPoints: [
      "My favorite musicians are Stevie Wonder and Mozart",
      "I love playing for my classmates at Crane's Music Hour, a open-mic for student musicians",
      "The most recent piece I've been practicing is Wet Hands from Minecraft",
    ],
    iconImg: pianoImg,
  },
  hapkido: {
    name: "Hapkido",
    description:
      "I have been doing hapkido for seven years until the black belt test",
    bulletPoints: [
      "I have been doing hapkido since I was five",
      "During the pandemic I would do the lessons online",
      "The final part of the black belt test is to do a flying kick to break boards of wood",
    ],
    iconImg: hapkido,
  },
  soccer: {
    name: "Soccer",
    description:
      "I have been doing soccer for since I was a little kid, but now I do it as school sports.",
    bulletPoints: [
      "I have been doing soccer since I was 7",
      "I played the schools soccer team in 7th grade.",
      "I just completed the last soccer season for in the school for me this year.",
    ],
    iconImg: soccer,
  },
  communityService: {
    name: "Community Service",
    description:
      "Since I was young I would go to the unity shop to help stock the shelves.",
    bulletPoints: [
      "The first time I had went to unity shop is when I was just eight.",
      "The unity shop helps feed the people who can not buy food, and make it feel like a shop.",
      "This year before winter break my school took us to the unity shop and I bagged some carrots.",
    ],
    iconImg: communityservice,
  },
  biking: {
    name: "Biking",
    description:
      "I was able to bike when I was young, but I just forgot how to ride until 7th grade where I re-learned the skill and I loved it.",
    bulletPoints: [
      "I learned how to ride a bike becuase my e block had a biking activity for one of them and I wanted to go.",
      "I ride my bike around the neighborhood every now and then and I enjoy doing it in the middle of the day.",
    ],
    iconImg: biking,
  },
  spanish: {
    name: "Spanish",
    description:
      "Ever since I was a kid I have been surrounded by spanish speakers, like the daycare I went to in San Francisco when I was very young.",
    bulletPoints: [
      "I have been studying spanish since I was in kindergarten.",
      "When I was in sixth grade I was surprised to discover that I got in the 95th percentile of the Nation Spanish Exam.",
      "My favorite spanish type holiday is the Day of the Dead, I get to eat the day of the dead bread in spanish class every year.",
    ],
    iconImg: spanish,
  },
  basketball: {
    name: "Basketball",
    description:
      "I have not been playing basketball for long, just for two years but now I ended up playing it competetively this year.",
    bulletPoints: [
      "Throghout theh two years of playing basketball with my school I have improved a lot.",
      "I am in the middle of the basketball season this iyear for my school on the varsity team.",
      "I enjoy playing at the ends of the court and to get some shots in.",
    ],
    iconImg: basketball,
  },
};
