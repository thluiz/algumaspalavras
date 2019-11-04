import styled from 'styled-components';
import { media } from '../utils/media';

import { Wrapper } from './Wrapper';

export const WrapperClassification: any = styled(Wrapper)`
  padding: ${(props: any) => (props.fullWidth ? '2rem' : '2rem 6rem')};
  @media ${media.tablet} {
    padding: ${(props: any) => (props.fullWidth ? '2rem' : '2rem 3rem')};
  }
  @media ${media.phone} {
    padding: ${(props: any) => (props.fullWidth ? '2rem' : '2rem 1rem')};
  }
`;
