import volleyballImg from "./images/Volleyball.jpg"; // Tell webpack this JS file uses this image
import pianoImg from "./images/Piano#2.jpg"; // Tell webpack this JS file uses this image

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
    iconImg: pianoImg,
  },
  volleyball: {
    name: "Volleyball",
    description: "I like volleyball",
    bulletPoints: [
      "I've played volleyball for 10 years now",
      "I play in the setter position",
      "Whenever we play volleyball, I love getting cheeseburgers after with the team!",
    ],
    iconImg: volleyballImg,
  },
};
