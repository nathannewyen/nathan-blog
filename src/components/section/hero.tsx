import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
// Components
import { Section } from "@styles";
import { ArrowButton } from "@components";

const StyledContainer = styled(Section)`
  .hero-content {
    display: flex;
    flex-direction: row;
  }
`;

const StyledHero = styled.div`
  width: 600px;
  position: relative;
  color: var(--color-white);
  font-size: var(--fz-title);
  font-weight: 500;

  .hero-button {
    ${({ theme }) => theme.mixins.button};
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
        filter: { fileAbsolutePath: { regex: "/hero/" } }
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

  const [isHovered, setHovered] = useState(false);
  const heroesData = data.heroes.edges;
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
                <motion.div
                  className="hero-about"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  initial="hidden"
                  whileHover="draw"
                  animate="hidden"
                >
                  <Link to="/#about">
                    <ArrowButton loading={loading} isHovered={isHovered} />
                    <span className="text">{about}</span>
                  </Link>
                </motion.div>
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
