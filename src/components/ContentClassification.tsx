import styled from 'styled-components';
import { media } from '../utils/media';

import { Content } from './Content';

export const ContentClassification = styled(Content)`
  padding: 3rem 4rem 2rem 4rem;
  @media ${media.tablet} {
    padding: 2rem 3rem 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
`;
