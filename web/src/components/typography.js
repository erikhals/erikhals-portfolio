import styled from 'styled-components'

export const title1 = styled.h1`
  font-size: var(--font-title1-size);
  line-height: var(--font-title1-line-height);
`

export const title2 = styled.h2`
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
`

export const title3 = styled.h3`
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
`

export const large = styled.h1`
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
`

export const base = styled.h2`
  font-size: inherit;
  line-height: inherit;
`

export const small = styled.h3`
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
`

export const micro = styled.p`
  font-size: var(--font-micro-size);
  line-height: var(--font-micro-line-height);
  text-transform: uppercase;
`

/*
 * Responsively sized elements
 */

export const paragraph = styled.p`
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  margin: 0export const 5rem 0 1rem 0;

  @media (min-width: 450px) {
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
`

export const blockQuote = styled.blockquote`
  background: #eee;
`

export const responsiveTitle1 = styled.h1`
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

export const responsiveTitle2 = styled.h2`
  font-weight: 900;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 1export const 5rem 0 0export const 5rem;

  @media (min-width: 450px) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  }
`

export const responsiveTitle3 = styled.h3`
  font-weight: 900;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 1rem 0 0export const 5rem;

  @media (min-width: 450px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }
`

export const responsiveTitle4 = styled.h4`
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  margin: 1rem 0 0export const 5rem;

  @media (min-width: 450px) {
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
`
