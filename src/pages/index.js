import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';

export default class IndexPage extends React.Component {
  
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const font = `Istok Web, sans-serif`
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="container">
          <div className="content">
            <h1 className="is-size-2" 
                style={{
                  fontFamily: `${font}`,
                  color: 'DimGray',
                  fontWeight: '500',
                  textShadow: '3px 3px 4px gainsboro'}}
              > Latest
              </h1>
          </div>
          {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => {
            return (
              <div 
                className="content" 
                style={{ 
                  border: '1px solid #eaecee', 
                  padding: '2.15em 2.7em' 
                  }} 
                key={post.id}
                >
                <p>
                  <Link 
                    style={{
                      color: 'slategray', 
                      fontSize: '1.83em',
                      fontWeight: '475',
                      textShadow: '3px 3px 6px rgb(178, 196, 222)'
                    }} 
                    to={post.frontmatter.path}
                    > {post.frontmatter.title}
                  </Link>
                  <p 
                    className="subtitle is-7" 
                    style={{
                      textTransform: 'uppercase',
                    }}
                    > {post.frontmatter.date}
                  </p>
                </p>
                <p>
                  {post.frontmatter.description}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.frontmatter.path} style={{boxShadow: '4px 4px 18px rgb(185, 215, 233)'}}>
                    Continue →
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 225)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            description
          }
        }
      }
    }
  }
`;
