import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Layout, ContentClassification, WrapperClassification, Header, SectionTitle, Title } from '../components';

import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

export default class AllCategoryTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;
    if (categories) {
      return (
        <Layout>
          <Helmet title={`Categorias | ${config.siteTitle}`} />
          <Header>
            <Link to="/">Início</Link>
            <SectionTitle>Categorias</SectionTitle>
          </Header>
          <WrapperClassification>
            <ContentClassification>
              {categories.map((category, index: number) => (
                <Title key={index}>
                  <Link to={`/categorias/${kebabCase(category)}`}>{category}</Link>
                </Title>
              ))}
            </ContentClassification>
          </WrapperClassification>
        </Layout>
      );
    }
  }
}
