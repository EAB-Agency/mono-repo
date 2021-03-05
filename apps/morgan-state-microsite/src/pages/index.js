import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import ProgramPreview from '../components/program-preview';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const programs = get(this, 'props.data.allContentfulProgram.edges');

    return (
      <Layout>
        index page
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h1>{siteTitle}</h1>
            <ul className="program-list">
              {programs.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ProgramPreview program={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProgram {
      edges {
        node {
          fullProgramName
          slug
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            raw
          }
          availableMethodsOfStudy
        }
      }
    }
  }
`;
