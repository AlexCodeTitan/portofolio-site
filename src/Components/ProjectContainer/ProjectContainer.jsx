import React from "react";
import {
  ImageWrapper,
  ProjectInfo,
  ProjectWrapper,
} from "./ProjectContainer.style";
import { projectsImages } from "../../utils";

function ProjectContainer({ data }) {
  return (
    <ProjectWrapper>
      <ProjectInfo>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <span>
          <h3>{data.techOne}</h3>
          <h3>{data.techTwo}</h3>
        </span>
        <a href={data.link} target="_blank">
          Live Demo
        </a>
      </ProjectInfo>
      <ImageWrapper>
        <img src={data.image} alt="" />
      </ImageWrapper>
    </ProjectWrapper>
  );
}

export default ProjectContainer;
