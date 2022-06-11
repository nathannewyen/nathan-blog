import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  .img {
    border-radius: 10px;
    height: 200px;
  }
`;

const StyledImage = styled.div``;

const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledText = styled.div`
  .about-title {
    color: var(--color-white);
    font-size: var(--fz-title);
    width: 500px;
  }

  .about-text {
    color: var(--color-blueGray);
    font-size: var(--fz-h3);
    width: 500px;
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
                    height: 200
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
                <div>{title}</div>
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
