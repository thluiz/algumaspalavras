import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Button, Article, SEO } from '../components';
import PageProps from '../models/PageProps';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';

const Homepage = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`;

const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.primary), 0.7)},
      ${rgba(lighten(0.1, props.theme.colors.grey.dark), 0.9)}), url(/assets/bg/word-cloud.png) no-repeat`
      : null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  h2 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const HomepageContent: any = styled.div`
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;
    return (
      <Layout>
        <Wrapper fullWidth={true}>
          <SEO postPath={config.siteTitle} postSEO={false} />
          <Homepage>
            <GridRow background={true}>
              <HomepageContent center={true}>
                <img src={config.siteLogo} />
                <h2>
                  Algumas palavras sobre
                </h2>
                <h1>                  
                  Kung Fu
                </h1>                
                
                <Link to="/publicacoes">
                  <Button big>
                    <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                    </svg>
                    Publicações
                  </Button>
                </Link>
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <h2>Sobre este site</h2>
                <p>
                  Este página é dedicada a escritos dos discípulos de{' '}
                  <a href="http://mestrejuliocamacho.com" target="_blank">
                    Mestre Sênior Julio Camacho
                  </a>
                  .
                </p>
                <hr />
                <h2>Últimas publicações</h2>
                {edges.map(post => (
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
                <p className={'textRight'}>
                  <Link to={'/publicacoes'}>Todas as publicações ({totalCount})</Link>
                </p>
                <hr />
              </HomepageContent>
            </GridRow>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
            excerpt
          }
          timeToRead
        }
      }
    }
  }
`;
