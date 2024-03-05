import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {id: 1, href: "#home", text: "home"},
  {id: 2, href: "#about", text: "about"},
  {id: 3, href: "#services", text: "services"},
  {id: 4, href: "#tours", text: "tours"},
];

export const socialLinks = [
  {id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook"},
  {id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter"},
  {id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace"},
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Take advantage of our special 15% discount between March 1st and May 31st. Valid for all our packages. An extra 10% is applied for new members.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Get Closer to the Culture on Exhilarating, Yet Convenient Small Group Tours. Energetic, Affordable Tours Designed for Active Travelers.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "As accommodation and meals are arranged at the end of each day, there is no need to carry tents, bedding or a lot of food",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae temporevoluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae temporevoluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae temporevoluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae temporevoluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
