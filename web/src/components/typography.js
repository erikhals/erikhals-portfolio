import styled from 'styled-components'

export const Title1 = styled.h1`
  font-size: var(--font-title1-size);
  line-height: var(--font-title1-line-height);
`

export const Title2 = styled.h2`
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
`

export const Title3 = styled.h3`
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
`

export const Large = styled.h1`
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
`

export const Base = styled.h2`
  font-size: inherit;
  line-height: inherit;
`

export const Small = styled.h3`
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
`

export const Micro = styled.p`
  font-size: var(--font-micro-size);
  line-height: var(--font-micro-line-height);
  text-transform: uppercase;
`

/*
 * Responsively sized elements
 */

export const Paragraph = styled.p`
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  margin: 0.5rem 0 1rem 0;

  @media (min-width: 450px) {
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
`

export const BlockQuote = styled.blockquote`
  background: #eee;
`

export const ResponsiveTitle1 = styled.h1`
  font-weight: 900;
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  margin: 1rem 0 2rem;

  @media (min-width: 450px) {
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
`

export const ResponsiveTitle2 = styled.h2`
  font-weight: 900;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 1.5rem 0 0.5rem;

  @media (min-width: 450px) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  }
`

export const ResponsiveTitle3 = styled.h3`
  font-weight: 900;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 1rem 0 0.5rem;

  @media (min-width: 450px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }
`

export const ResponsiveTitle4 = styled.h4`
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  margin: 1rem 0 0.5rem;

  @media (min-width: 450px) {
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
`
