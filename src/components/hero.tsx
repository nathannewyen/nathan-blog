import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Section } from "@styles";

const StyledContainer = styled(Section)``;

const StyledTitle = styled.h3`
  width: 500px;
  color: var(--color-white);
  font-size: var(--fz-title);
  font-weight: 400;
  line-height: 1.25;
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroes: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);

  const heroesData = data.heroes.edges;

  return (
    <StyledContainer>
      {heroesData &&
        heroesData.map(({ node }, i) => {
          const { html } = node;
          return (
            <div key={i}>
              <StyledTitle dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          );
        })}
    </StyledContainer>
  );
};

export default Hero;
