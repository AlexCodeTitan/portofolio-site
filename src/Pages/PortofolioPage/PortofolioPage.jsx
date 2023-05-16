import React, { useState } from "react";
import { PortofolioWrapper } from "./PortofolioPage.style";
import { projectsImages } from "../../utils";
import ProjectContainer from "./../../Components/ProjectContainer/ProjectContainer";
import { projects } from "./../../utils";

function PortofolioPage() {
  const [selected, setSelected] = useState("");

  const handleLinkClick = (id) => {
    setSelected(id);
    console.log(selected, 2);
  };

  return (
    <PortofolioWrapper>
      {projects.map((project, index) => (
        <ProjectContainer data={project} key={index} />
      ))}
    </PortofolioWrapper>
  );
}

export default PortofolioPage;

////////////////////////////////////////
{
  /* <div>
  <div>
    <h1>TITLE</h1>
    <h2>SUBTITLE</h2>
    <p>Technologies</p>
    <CustomBtn>See Project</CustomBtn>
  </div>
  <div>
    <h2>FEATURES</h2>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
  </div>
</div>
<ImagesWrapper>
  {BankImages.map((image, index) => (
    <ImageContainer
      key={index}
      onClick={() => handleLinkClick(index)}
      active={selected === index}
    >
      <img src={image} alt="" />
    </ImageContainer>
  ))}
</ImagesWrapper> */
}
