import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import ProgramPreview from '../components/program-preview';

import './programs.module.scss';

export function Programs(props) {
  const siteTitle = props.data.site.siteMetadata.title;
  const programs = props.data.allContentfulProgram.edges;

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h1>Morgan State Programs</h1>
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
export default Programs;

export const programQuery = graphql`
  query programQuery {
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
