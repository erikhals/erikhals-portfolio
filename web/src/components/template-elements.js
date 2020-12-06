import styled from "styled-components";
import * as S from "./typography";

export const TopWrapper = styled.div`
  padding-top: 6rem;
`;

export const MainContent = styled.div`
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

export const PlaceLogo = styled.li`
  & img {
    width: 200px;
    height: 100%;
    object-fit: contain;
  }
`;

export const Categories = styled.div`
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

export const ListHeadline = styled(S.Base)`
  margin: 0.5rem 0 0;
`;

export const PublishedAt = styled(S.Small)`
  margin: 1.5rem 0 3rem;
  color: var(--color-gray);
`;

export const ListItem = styled.li`
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

export const RelatedProjects = styled.div`
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
