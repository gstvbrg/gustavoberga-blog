import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';

export const BlogPostTemplate = ({ content, contentComponent, description, title, helmet }) => {
  const PostContent = contentComponent || Content;
  const font = `Istok Web, sans-serif`
  return <section className="section" style={{color: 'DimGray'}}>
    { helmet ? helmet : ""}
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2"
              style={{
                fontFamily: `${font}`,
                fontWeight: 'lighter',
                color: 'DimGray'
              }}
          >{title}</h1>
          <p className="subtitle is-4"
              style={{
                color: 'skyblue'
              }}
          >{description}</p>
          <hr/>
          <PostContent content={content} />
        </div>
      </div>
    </div>
  </section>;
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
  />;
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
