import React from "react";
import {
  AboutWrapper,
  CardWrapper,
  Circle,
  HeaderWrapper,
  SkillWrapper,
} from "./AboutPage.style";
import Card from "../../Components/Card/Card";
import SkillCard from "../../Components/SkillCard/SkillCard";
import { FaFigma, FaGit, FaJira, FaReact } from "react-icons/fa";
import { SiGit, SiGraphql, SiRedux, SiWebpack } from "react-icons/si";

const cardsInfo = [
  {
    title: "WEB DESIGN",
    text: "I put focus on designing websites that are both functional and aesthetically pleasing, with a user-centered approach.",
  },
  {
    title: "DEVELOPMENT",
    text: "Commitment to implement cutting-edge technologies and industry best practices to deliver high-quality, secure websites.",
  },
  {
    title: "CONTENT/SEO",
    text: "Page optimization techniques, to boost website rankings & traffic through research and content optimization.",
  },
];

const skills = [
  { icon: <FaReact size={35} />, title: "React JS" },
  { icon: <SiRedux size={35} />, title: "Redux" },
  { icon: <SiGit size={35} />, title: "Git" },
  { icon: <FaJira size={35} />, title: "Jira" },
  { icon: <SiWebpack size={35} />, title: "Webpack" },
  { icon: <SiGraphql size={35} />, title: "GraphQL" },
  { icon: <FaFigma size={35} />, title: "Figma" },
];

function AboutPage() {
  return (
    <AboutWrapper>
      <HeaderWrapper>
        <Circle />
        <h1>
          I am a passionate Front-End Developer with almost 2 years of
          experience
        </h1>
      </HeaderWrapper>
      <CardWrapper>
        {cardsInfo.map((card, index) => (
          <Card key={index} title={card.title} text={card.text} index={index} />
        ))}
      </CardWrapper>
      <div>
        <h1>My skills</h1>
        <SkillWrapper>
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title}>
              {skill.icon}
            </SkillCard>
          ))}
        </SkillWrapper>
      </div>
    </AboutWrapper>
  );
}

export default AboutPage;
