import image1 from "./assets/bankApp/4.jpg";
import image2 from "./assets/bankApp/5.jpg";
import image3 from "./assets/bankApp/7.jpg";
import image4 from "./assets/bankApp/6.jpg";
import leaflife1 from "./assets/leaflife1.jpg";
import weather1 from "./assets/weather1.jpg";
import dashboard1 from "./assets/dashboard1.jpg";
import arhizet1 from "./assets/arhizet1.jpg";
import concordia1 from "./assets/concordia/concordia1.png";

export const BankImages = [];

export const projectsImages = [
  { name: "Azure Bank", images: [image1, image2, image3, image4] },
  { name: "Arhizet", images: [arhizet1, image2, image3, image4] },
  { name: "LeafLife", images: [leaflife1, image2, image3, image4] },
  { name: "Concordia", images: [concordia1, image2, image3, image4] },
  { name: "Weather", images: [weather1, image2, image3, image4] },
  { name: "Dashboard", images: [dashboard1, image2, image3, image4] },
];

export const projects = [
  {
    name: "Azure Bank",
    image: image1,
    description:
      "User-friendly Web Banking App that allows you to manage your finances on-the-go. It offers a convenient dashboard with features like real-time balance tracking, fund transfers, currency exchange, deposits and much more.",
    techOne: "React JS",
    techTwo: "Java Spring",
    link: "https://github.com/ionutiosipescu/Bank-App",
  },

  {
    name: "LeafLife",
    image: leaflife1,
    description:
      "The plant care app landing page is a captivating platform that introduces a user-friendly application designed to help plant lovers care for their plants. The landing page invites users to discover the app's features, download it, and start nurturing their plants with confidence.",
    techOne: "React JS",
    techTwo: "Styled Comp",
    link: "https://leaflife.netlify.app/",
  },
  {
    name: "Concordia",
    image: concordia1,
    description:
      "The website has a sleek and professional look that showcases the firm's expertise. With a clean design and intuitive navigation, it presents practice areas, attorney profiles, testimonials, and a contact form, reflecting trust and credibility.",
    techOne: "React JS",
    techTwo: "Styled Comp",
    link: "https://concorida-legal.netlify.app/",
  },
  {
    name: "Arhizet",
    image: arhizet1,
    description:
      "The website is a visually captivating platform that showcases the architect's portfolio, services offered, and contact information. It provides a seamless way for potential clients to explore the architect's work and get in touch for project inquiries.",
    techOne: "WordPress",
    techTwo: "Visual Composer",
    link: "https://arhizet.ro/",
  },
  {
    name: "Weather",
    image: weather1,
    description:
      "User-friendly platform that provides real-time weather information and forecasts. With a simple and intuitive interface, users can easily access current weather conditions, hourly and daily forecasts, and extended weather outlooks.",
    techOne: "React JS",
    techTwo: "Bootstrap",
    link: "https://weather-alex-aandonesei.netlify.app/",
  },
  {
    name: "Dashboard",
    image: dashboard1,
    description:
      "With a clean and visually appealing interface, it presents real-time analytics, charts, and graphs to track performance, monitor trends, and make informed decisions. Empowering users to stay informed and in control of their data at all times.",
    techOne: "JavaScript",
    techTwo: "Bootstrap",
    link: "https://gleaming-dragon-3da17c.netlify.app/",
  },
];
