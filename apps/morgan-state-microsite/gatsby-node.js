const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const programTemplate = path.resolve('./src/templates/program-template.js');
    resolve(
      graphql(
        `
          {
            allContentfulProgram {
              edges {
                node {
                  fullProgramName
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const programs = result.data.allContentfulProgram.edges;
        programs.forEach((program, index) => {
          createPage({
            path: `/program/${program.node.slug}/`,
            component: programTemplate,
            context: {
              slug: program.node.slug,
            },
          });
        });

        // const posts = result.data.allContentfulBlogPost.edges
        // posts.forEach((post, index) => {
        //   createPage({
        //     path: `/blog/${post.node.slug}/`,
        //     component: blogPost,
        //     context: {
        //       slug: post.node.slug,
        //     },
        //   })
        // })
      })
    );
  });
};
