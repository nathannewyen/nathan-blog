import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
// Components
import { Section } from "@styles";
import { socialMedia } from "@config";
import { Icon } from "@components/icons";
import { ArrowButton } from "@components";

const StyledContainer = styled(Section)``;

const StyledImage = styled.div`
  div {
    margin: 0.3rem 0;
  }

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

  .about-button {
    font-size: var(--fz-xxl);
    color: var(--color-white);
    .about-button-text {
      margin-left: 20px;
    }
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

  svg {
    transform: rotate(270deg);
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
  const [isHovered, setHovered] = useState(false);
  const loading = {
    hidden: { pathLength: 0, opacity: 0, rotate: 270 },
    visible: { pathLength: 1, opacity: 0.1, rotate: 270 },
    draw: () => {
      return {
        pathLength: 1,
        opacity: 1,
        rotate: 270,
        transition: {
          pathLength: { type: "spring", duration: 1, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  return (
    <StyledContainer id="about">
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
                <motion.div
                  className="about-button"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  initial="hidden"
                  whileHover="draw"
                  animate="hidden"
                >
                  <Link to="/#about">
                    <ArrowButton loading={loading} isHovered={isHovered} />
                    <span className="about-button-text">
                      Learn More About Nhan
                    </span>
                  </Link>
                </motion.div>
              </StyledText>
            </StyledAboutMe>
          );
        })}
    </StyledContainer>
  );
};

export default AboutMe;
