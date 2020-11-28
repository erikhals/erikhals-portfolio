import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import { Background, ArticleGrid, LinkBack } from "./layout";
import * as S from "./typography";

function Education(props) {
  const {
    _rawBody,
    title,
    places,
    softwares,
    skills,
    mainImage,
    publishedAt,
    relatedProjects
  } = props;

  const EducationBackground = () => {
    const data = useStaticQuery(graphql`
      query EducationBGQuery {
        background: file(relativePath: { eq: "About_BG.jpg" }) {
          id
          childImageSharp {
            fluid(jpegQuality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);
    return (
      <Background
        fluid={data.background.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        alt=""
      />
    );
  };

  return (
    <article>
      <EducationBackground />
      <LinkBack to="/about" />
      <TopWrapper>
        {mainImage && mainImage.asset && (
          <Certificate>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .url()}
              alt={mainImage.alt}
            />
          </Certificate>
        )}
      </TopWrapper>
      <Container>
        <ArticleGrid>
          <MainContent>
            <S.Title1>{title}</S.Title1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </MainContent>
          <aside>
            {publishedAt && (
              <PublishedAt>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do YYYY")}
              </PublishedAt>
            )}
            {places && places.length > 0 && (
              <Categories>
                <ListHeadline>Institution</ListHeadline>
                <ul>
                  {places.map(place => (
                    <PlaceLogo key={place._id}>
                      <img src={place.logo.asset.fluid.src} alt={place.title} />
                    </PlaceLogo>
                  ))}
                </ul>
              </Categories>
            )}
            {skills && skills.length > 0 && (
              <Categories>
                <ListHeadline>Skills</ListHeadline>
                <ul>
                  {skills.map(skill => (
                    <ListItem key={skill._id}>
                      <img src={skill.logo.asset.fixed.src} alt={skill.title} />
                      <span>{skill.title}</span>
                    </ListItem>
                  ))}
                </ul>
              </Categories>
            )}
            {softwares && softwares.length > 0 && (
              <Categories>
                <ListHeadline>Tools</ListHeadline>
                <ul>
                  {softwares.map(software => (
                    <ListItem key={software._id}>
                      <a href={software.link} target="_blank">
                        <img
                          src={software.logo.asset.fixed.src}
                          alt={software.title}
                        />
                        <span>{software.title}</span>
                      </a>
                    </ListItem>
                  ))}
                </ul>
              </Categories>
            )}

            {relatedProjects && relatedProjects.length > 0 && (
              <RelatedProjects>
                <ListHeadline>Related projects</ListHeadline>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>
                          {project.title}
                        </Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </RelatedProjects>
            )}
          </aside>
        </ArticleGrid>
      </Container>
    </article>
  );
}

const TopWrapper = styled.article`
  padding-top: 6rem;
`;

const MainContent = styled.div`
  padding: 2em 4em 6em 4em;
  & a {
    color: var(--color-accent);

    @media (hover: hover) {
      &:hover {
        color: inherit;
      }
    }
  }
`;

const Certificate = styled.div`
  position: relative;
  box-sizing: border-box;
  background: #eee;
  border-width: 40px;
  border-color: rgb(17, 34, 51);
  border-style: solid;

  & img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: contain;
  }
  @media (min-width: 960px) {
    width: 960px;
    margin: auto;
  }
`;

const PlaceLogo = styled.li`
  & img {
    width: 200px;
    height: 100%;
    object-fit: contain;
  }
`;

const Categories = styled.div`
  border-top: 1px solid var(--color-very-light-gray);
  margin: 2rem 0 3rem;

  & ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

  & ul li {
    padding: 0.25rem 0;
  }
`;

const ListHeadline = styled(S.Base)`
  margin: 0.5rem 0 0;
`;

const PublishedAt = styled(S.Small)`
  margin: 1.5rem 0 3rem;
  color: var(--color-gray);
`;

const ListItem = styled.li`
  position: relative;
  margin: 0.5em 0;
  display: flex;
  align-items: center;
  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  & img {
    width: 2em;
    height: 2em;
    padding: 0;
    margin-right: 1em;
  }
  :hover a {
    text-decoration: underline;
  }
`;

const RelatedProjects = styled.div`
  border-top: 1px solid var(--color-very-light-gray);
  margin: 2rem 0 3rem;

  & ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

  & a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    padding: 0.25rem 0;
  }
`;

export default Education;
