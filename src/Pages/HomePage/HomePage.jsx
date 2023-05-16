import React from "react";
import {
  Header,
  HeroWrapper,
  HomeWrapper,
  TextWrapper,
} from "./HomePage.style";
import CustomBtn from "../../Components/CustomBtn/Custombtn";
import { Link } from "react-router-dom";
import img from "../../assets/profile3.png";

function HomePage() {
  return (
    <HomeWrapper>
      <Header>
        <h3>Hello</h3>
        <h1>I'm Alex</h1>
        <p>Front-End Web Developer</p>
        <Link to="portofolio">
          <CustomBtn>Portofolio</CustomBtn>
        </Link>
      </Header>
      <HeroWrapper>
        <TextWrapper>
          <h1>ALEX</h1>
          {/* <h1>L</h1> */}
          {/* <h1>E</h1> */}
          {/* <h1>X</h1> */}
        </TextWrapper>
        <img src={img} alt="" />
      </HeroWrapper>
    </HomeWrapper>
  );
}

export default HomePage;
