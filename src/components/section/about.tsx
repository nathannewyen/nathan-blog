import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section } from "@styles";
import { socialMedia } from "@config";
import { Icon } from "@components/icons";

const StyledContainer = styled(Section)``;

const StyledImage = styled.div`
  .img {
    border-radius: 10px;
  }
`;

const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;

  .about-introduce {
    color: var(--color-blueGray);
  }

  .project-links {
    color: var(--color-white);

    svg {
      width: 20px;
      height: 20px;
    }

    a {
      &:hover {
        color: var(--color-white);
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--color-white);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }

  div {
    margin: 0.3rem 0;
  }
`;

const StyledText = styled.div`
  width: 600px;

  .about-title {
    color: var(--color-white);
    font-size: var(--fz-title);
  }

  .about-text {
    color: var(--color-blueGray);
    font-size: var(--fz-h2);
  }
`;

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      heroes: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about/" } }
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
                    width: 350
                    height: 220
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

  const aboutsData = data.heroes.edges;

  const github = socialMedia[0].url;

  return (
    <StyledContainer>
      {aboutsData &&
        aboutsData.map(({ node }, i: number) => {
          const { html, frontmatter } = node;
          const { cover, title, about } = frontmatter;
          const image = getImage(cover);
          return (
            <StyledAboutMe key={i}>
              <StyledImage>
                <GatsbyImage image={image} alt={title} className="img" />
                <div className="about-introduce">{title}</div>
                <div className="project-links">
                  <Link to={github} aria-label="GitHub Link" target="_blank">
                    Check out my Github <Icon name="GitHub" />
                  </Link>
                </div>
              </StyledImage>

              <StyledText>
                <div className="about-title">{about}</div>
                <div
                  className="about-text"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </StyledText>
            </StyledAboutMe>
          );
        })}
    </StyledContainer>
  );
};

export default AboutMe;
