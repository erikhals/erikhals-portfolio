import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import { Background, ArticleGrid, LinkBack } from "./layout";
import {
  TopWrapper,
  PlaceLogo,
  ListItem,
  ListHeadline,
  Categories,
  PublishedAt,
  RelatedProjects
} from "./template-elements";
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
                      <Link to={"/work"} state={{ skill: skill.title }}>
                        <img
                          src={skill.logo.asset.fixed.src}
                          alt={skill.title}
                        />
                        <span>{skill.title}</span>
                      </Link>
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

const MainContent = styled.div`
  margin-right: 4em;
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
  @media (min-width: 1100px) {
    width: 1100px;
    margin: auto;
  }
`;

export default Education;
