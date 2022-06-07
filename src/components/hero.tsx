import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// Components
import { Section } from "@styles";
import { ArrowButton } from "./arrow-button";
const StyledContainer = styled(Section)`
  .hero-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

const StyledHero = styled.div`
  position: relative;
  color: var(--color-white);
  font-size: var(--fz-title);
  font-weight: 500;

  .hero-button {
    ${({ theme }) => theme.mixins.button};
  }

  .hero-arrow-button {
    ${({ theme }) => theme.mixins.arrowButton};
  }

  .hero-about {
    font-size: var(--fz-xxl);
    position: absolute;
    bottom: 0;
    vertical-align: bottom;

    span {
      margin-left: 20px;
    }
  }
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
              about
              cover {
                childImageSharp {
                  gatsbyImageData(
                    width: 900
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
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
        heroesData.map(({ node }, i: number) => {
          const { html, frontmatter } = node;
          const { cover, title, about } = frontmatter;
          const image = getImage(cover);
          return (
            <div key={i} className="hero-content">
              <StyledHero>
                <div
                  className="hero-title"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <button className="hero-button">Read the blog</button>
                <div className="hero-about">
                  <ArrowButton />
                  <span className="text">{about}</span>
                </div>
              </StyledHero>
              <div>
                <GatsbyImage image={image} alt={title} className="img" />
              </div>
            </div>
          );
        })}
    </StyledContainer>
  );
};

export default Hero;
