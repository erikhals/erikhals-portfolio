import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import * as S from './typography'

function Project (props) {
  const {
    _rawBody,
    title,
    places,
    softwares,
    mainImage,
    publishedAt,
    relatedProjects
  } = props
  return (
    <article>
      {props.mainImage && mainImage.asset && (
        <MainImage>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </MainImage>
      )}
      <Container>
        <Grid>
          <MainContent>
            <S.Title1>{title}</S.Title1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </MainContent>
          <aside>
            {publishedAt && (
              <PublishedAt>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </PublishedAt>
            )}
            {places && places.length > 0 && (
              <Categories>
                <ListHeadline>Where?</ListHeadline>
                <ul>
                  {places.map(place => (
                    <li key={place._id}>{place.title}</li>
                  ))}
                </ul>
              </Categories>
            )}
            {softwares && softwares.length > 0 && (
              <Categories>
                <ListHeadline>With?</ListHeadline>
                <ul>
                  {softwares.map(software => (
                    <li key={software._id}>
                      <div>
                        <img src={software.logo.asset.fixed.src} />
                      </div>
                      {software.title}
                    </li>
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
        </Grid>
      </Container>
    </article>
  )
}

const MainContent = styled.div`
  & a {
    color: var(--color-accent);

    @media (hover: hover) {
      &:hover {
        color: inherit;
      }
    }
  }
`

const MainImage = styled.div`
  position: relative;
  background: #eee;
  padding-bottom: calc(9 / 16 * 100%);

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`

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
`

const ListHeadline = styled(S.Base)`
  margin: 0.5rem 0 0;
`

const PublishedAt = styled(S.Small)`
  margin: 1.5rem 0 3rem;
  color: var(--color-gray);
`

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
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;

  @media (min-width: 675px) {
    grid-template-columns: 3fr 1fr;
  }
`

export default Project
