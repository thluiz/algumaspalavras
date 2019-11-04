import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, SectionTitle, ContentClassification, Title } from '../components';

import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

export default class AllTagTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { tags } = this.props.pathContext;
    if (tags) {
      return (
        <Layout>
          <Helmet title={`Etiquetas | ${config.siteTitle}`} />
          <Header>
            <Link to="/">Início</Link>
            <SectionTitle>Etiquetas</SectionTitle>
          </Header>
          <Wrapper>
            <ContentClassification>
              {tags.map((tag, index: number) => (
                <Title key={index}>
                  <Link to={`/etiquetas/${kebabCase(tag)}`}>{tag}</Link>
                </Title>
              ))}
            </ContentClassification>
          </Wrapper>
        </Layout>
      );
    }
  }
}
