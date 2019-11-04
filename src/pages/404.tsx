import * as React from 'react';
import { ContentClassification, Header, Layout, Wrapper, SectionTitle } from '../components';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { Link } from 'gatsby';

export default class NotFoundPage extends React.Component<any> {
  public render() {
    return (
      <Layout>
        <Helmet title={`404 - Palavras não encontradas | ${config.siteTitle}`} />
        <Header>
          <Link to="/">Início</Link>
          <SectionTitle>Palavras não encontradas</SectionTitle>
        </Header>
        <Wrapper>
          <ContentClassification>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </ContentClassification>
        </Wrapper>
      </Layout>
    );
  }
}
