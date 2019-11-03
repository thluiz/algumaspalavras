import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import config from '../../config/SiteConfig';

const SignatureWrapper: any = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  flex-grow: 1;
`;

const FooterContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  max-width: 20rem;
  text-align: right;
  @media ${media.phone} {
    font-size: 0.7rem;
  }
`;

const AuthorImageContent = styled(FooterContent)`
  @media ${media.tablet} {
    max-width: 15rem;
  }
  @media ${media.phone} {
    max-width: 15rem;
  }
`;

const AuthorPhoto = styled.img`
  width: 100%;
  margin-bottom: 0;
`;

interface Props {
  quote?: any;
}

export class Signature extends React.PureComponent<Props> {
  public render() {
    const quote = this.props.quote;

    return (
      <SignatureWrapper>
        <AuthorImageContent>
          <AuthorPhoto src={config.authorPhoto} alt={config.authorPhotoSubtitle} title={config.authorPhotoSubtitle} />
        </AuthorImageContent>
        <FooterContent>
          Discípulo de Mestre Julio Camacho,
          <br />
          Thiago Silva,
          <br />
          Moy Chi Yau Si.
          <br />
          {quote ? <i>{quote}</i> : ''}
        </FooterContent>
      </SignatureWrapper>
    );
  }
}
