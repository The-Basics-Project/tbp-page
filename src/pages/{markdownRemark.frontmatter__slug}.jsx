/* eslint-disable react/no-danger */
import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function MarkdownPageTemplate({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <h1
        style={{
          marginInline: 'auto',
          width: 'fit-content',
          marginTop: '40px',
        }}
      >
        {frontmatter.title}
      </h1>
      <div
        style={{
          maxWidth: '100%',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
