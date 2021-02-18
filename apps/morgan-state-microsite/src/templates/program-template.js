import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ProgramPreview from '../components/program-preview';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import heroStyles from '../components/hero.module.scss';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className="link" href={node.data.uri}>
          {children}
        </a>
      );
    },
  },
};

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulProgram');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.fullProgramName} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.fullProgramName}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.fullProgramName}</h1>

            <h2>full program name:</h2>
            <p>{post.fullProgramName}</p>

            <h2>program description</h2>
            {documentToReactComponents(post.description, RICHTEXT_OPTIONS)}

            <h2>available methods of study</h2>
            <p>{post.availableMethodsOfStudy}</p>

            <h2>Credit Hours</h2>
            <p>{post.creditHours}</p>

            <h2>startDates</h2>
            <p>{post.startDates}</p>

            <h2>typeOfDegree</h2>
            <p>{post.typeOfDegree}</p>

            <h2>relatedSchoolCollege</h2>
            <p>Title: {post.relatedSchoolCollege.title}</p>
            <p>slug: {post.relatedSchoolCollege.slug}</p>

            <h2>programDetailUrl</h2>
            <Link to={post.programDetailUrl}>{post.programDetailUrl}</Link>

            <h2>careerDetails</h2>
            {documentToReactComponents(
              post.careerDetails.json,
              RICHTEXT_OPTIONS
            )}

            {/* <h2>outcomeFocusedSocialProof</h2>
            <p>{post.outcomeFocusedSocialProof.internal.content}</p> */}

            <h2>additionalResources</h2>
            {/* {documentToReactComponents(
              post.additionalResources.raw,
              RICHTEXT_OPTIONS
            )} */}

            {/* <h2>prefooterCtaCopy</h2>
            <p>{post.prefooterCtaCopy.internal.content}</p> */}

            <h2>applicationUrl</h2>
            <Link to={post.applicationUrl}>{post.applicationUrl}</Link>

            <h2>tuitionCalculatorUrl</h2>
            <Link to={post.tuitionCalculatorUrl}>
              {post.tuitionCalculatorUrl}
            </Link>

            <h2>metaDescription</h2>
            {/* <p>{post.metaDescription.internal.content}</p> */}

            <h2>iwc</h2>
            <p>
              {post.iwc.iwcTitle} | {post.iwc.iwcLocation}
            </p>

            <h2>relatedPrograms</h2>
            {post.relatedPrograms.map((node) => {
              return (
                <li key={node.id}>
                  <ProgramPreview program={node} />
                </li>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProgram(slug: { eq: $slug }) {
      fullProgramName
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      availableMethodsOfStudy
      creditHours
      startDates
      typeOfDegree
      relatedSchoolCollege {
        slug
        title
      }
      programDetailUrl
      careerDetails {
        raw
      }
      outcomeFocusedSocialProof {
        raw
      }
      additionalResources {
        raw
      }
      applicationUrl
      tuitionCalculatorUrl
      iwc {
        iwcTitle
        iwcLocation
      }
      relatedPrograms {
        fullProgramName
        id
        slug
        heroImage {
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;
