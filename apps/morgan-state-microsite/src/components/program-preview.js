import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import styles from './program-preview.module.scss';

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
export default ({ program }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={program.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/program/${program.slug}`}>{program.fullProgramName}</Link>
    </h3>
    {/* {documentToReactComponents(program.description, RICHTEXT_OPTIONS)} */}

    {program.availableMethodsOfStudy &&
      program.availableMethodsOfStudy.map((tag) => (
        <p className={styles.tag} key={tag}>
          Available methods of study: {tag}
        </p>
      ))}
  </div>
);
