import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../config/Theme';
import { media } from '../utils/media';
import split from 'lodash/split';
import './layout.scss';
import config from '../../config/SiteConfig';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`;

const Footer = styled.footer`
  flex-direction: row;
  align-items: flex-start;
  flex-grow: 1;
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
  @media ${media.display} {
    display: flex;
  }
  @media ${media.tablet} {
    display: none;
  }
  @media ${media.phone} {
    display: none;
  }
  img {
    max-height: 10rem;
  }
`;

const FooterContent = styled.div`
  flex: 1;
  text-align: center;
`;

const FooterCentralContent = styled(FooterContent)`
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const FooterLeftContent = styled(FooterContent)`
  padding-left: 2rem;
`;

const FooterRightContent = styled(FooterContent)`
  padding-right: 2rem;
`;

const FooterMobile = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-grow: 1;
  text-align: center;
  padding: 2rem 0;
  @media ${media.display} {
    display: none;
  }
  @media ${media.tablet} {
    display: flex;
  }
  @media ${media.phone} {
    display: block;
  }
`;

const FooterMobileContent = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  @media ${media.tablet} {
    display: block;
  }
  @media ${media.phone} {
    display: block;
  }
  @media ${media.display} {
    display: none;
  }
  img {
    max-height: 10rem;
  }
`;

const Content = styled.div`
  p {
    display: block;
    padding: 0;
    margin: 0;
  }
`;

class SiteLicense extends React.PureComponent<{}> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              buildTime(formatString: "DD.MM.YYYY")
            }
          }
        `}
        render={data => (
          <Content>
            <p>
              &copy; {split(data.site.buildTime, '.')[2]} por Thiago Silva
              <br />
              梅 知 友 士
              <br />
              Moy Chi Yau Si
            </p>
            <p>Todos os direitos Reservados.</p>
            <p>
              <a href="https://github.com/thluiz/algumaspalavras">GitHub</a>
            </p>
            <p>Última compilação: {data.site.buildTime}</p>
          </Content>
        )}
      />
    );
  }
}

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          {children}
          <Footer>
            <FooterLeftContent>
              <img src={config.cmjloPhoto} alt={config.cmjloPhotoTitle} title={config.cmjloPhotoTitle} />
            </FooterLeftContent>
            <FooterCentralContent>
              <SiteLicense />
            </FooterCentralContent>
            <FooterRightContent>
              <img src={config.cmjloLogo} alt={config.cmjloLogoTitle} title={config.cmjloLogoTitle} />
            </FooterRightContent>
          </Footer>

          <FooterMobile>
            <FooterMobileContent>
              <SiteLicense />
            </FooterMobileContent>
          </FooterMobile>
          <FooterMobile>
            <FooterMobileContent>
              <img src={config.cmjloPhoto} alt={config.cmjloPhotoTitle} title={config.cmjloPhotoTitle} />
            </FooterMobileContent>
            <FooterMobileContent>
              <img src={config.cmjloLogo} alt={config.cmjloLogoTitle} title={config.cmjloLogoTitle} />
            </FooterMobileContent>
          </FooterMobile>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
