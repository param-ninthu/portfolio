import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  login,
  threejs,
  effective,
  knot,
  owmf,
  charity,
  adminDash,
  charitylog,
  spring,
  java,
  vue,
  flutter,
  movieReview,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Springboot",
    icon: spring,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Effective Solutions",
    icon: effective,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      "Route Radar - Tracking management system",
      "Developing a mobile application for Fleet management.",
      "This mobile application will be used for tracking the movements of vehicles movements through devices.",
    ],
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "knot",
    description:
      "Knot is an online wedding planner that helps you plan your wedding. It is a web application that helps you to plan your wedding by providing you with a checklist of things to do and also helps you to find the best vendors for your wedding.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "purple-blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "red-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-green-text-gradient  ",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: knot,
    source_code_link: "https://github.com/Knot-17",
  },
  {
    name: "Click and Share",
    description:
      "Allow charities to market their own products also they can request for donations from the users. The users can donate to the charities and also they can buy the products from the charities.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "red-text-gradient",
      },
      {
        name: "style sheet",
        color: "pink-text-gradient",
      },
    ],
    image: charitylog,
    source_code_link: "https://github.com/param-ninthu/Charity",
  },
  {
    name: "Movie Review (Learning)",
    description:
      "This is a learning project to learn the basics of springboot. This project is a movie review application where the user can see the details of the movie and can also review the movie.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: movieReview,
    source_code_link: "https://github.com/param-ninthu/movies",
  },
  {
    name: "Agrofy",
    description:
      "Providing interfaces to the Business organizations like supermarkets and restaurants to buy the excess yield from farmers. Also providing interfaces to the farmers to sell their excess yield to the business organizations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "red-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-green-text-gradient  ",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: login,
    source_code_link: "https://github.com/param-ninthu/Agrofy",
  },
  {
    name: "Suggest me Weather",
    description:
      "Learning project inorder to learn the API integrations. So here we are implemented Google cloud API , MapBox API , Open Weathermap API in order to build this system.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "red-text-gradient",
      },
      {
        name: "django",
        color: "blue-green-text-gradient  ",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: owmf,
    source_code_link: "https://github.com/param-ninthu/OurGroupProject",
  },
];

export { services, technologies, experiences, testimonials, projects };
