import React from "react";
import { SkillCardContainer } from "./SkillCard.style";

function SkillCard({ children, title }) {
  return (
    <SkillCardContainer>
      {children}
      <h4>{title}</h4>
    </SkillCardContainer>
  );
}

export default SkillCard;
