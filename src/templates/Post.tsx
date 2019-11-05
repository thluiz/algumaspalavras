import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, Subline, SEO, PrevNext, SectionTitle, Content, Signature } from '../components';
import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';
import PathContext from '../models/PathContext';
import Post from '../models/Post';
import { media } from '../utils/media';

const PostContent = styled.div`
  margin-top: 3rem;
  @media ${media.tablet} {
    margin-top: 1.5rem;
  }
  @media ${media.phone} {
    margin-top: 1rem;
  }
`;

interface Props {
  data: {
    markdownRemark: Post;
  };
  pathContext: PathContext;
}

export default class PostPage extends React.PureComponent<Props> {
  public render() {
    const { prev, next } = this.props.pathContext;
    const post = this.props.data.markdownRemark;
    return (
      <Layout>
        {post ? (
          <>
            <SEO postPath={post.fields.slug} postNode={post} postSEO />
            <Header banner={post.frontmatter.featureImage ? post.frontmatter.featureImage.publicURL : '/assets/bg/word-cloud.png'}>
              <Link to="/">{config.siteTitle}</Link>
              <SectionTitle>{post.frontmatter.title}</SectionTitle>
              <Subline light={true}>
                {post.frontmatter.date} &mdash; {post.timeToRead} minuto{post.timeToRead > 1 ? 's' : ''} para leitura &mdash; em{' '}
                <Link to={`/categorias/${kebabCase(post.frontmatter.category)}`}>{post.frontmatter.category}</Link>
              </Subline>
            </Header>
            <Wrapper>
              <Content>
                <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
                <Signature />
                {post.frontmatter.tags ? (
                  <Subline>
                    Etiquetas: &#160;
                    {post.frontmatter.tags.map((tag, i) => (
                      <Link key={i} to={`/etiquetas/${kebabCase(tag)}`}>
                        <strong>{tag}</strong> {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                      </Link>
                    ))}
                  </Subline>
                ) : null}
                <PrevNext prev={prev} next={next} />
              </Content>
            </Wrapper>
          </>
        ) : null}
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
        excerpt
        featureImage {
          publicURL
          relativePath
        }
      }
      timeToRead
    }
  }
`;
