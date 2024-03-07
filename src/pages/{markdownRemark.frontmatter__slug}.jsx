/* eslint-disable react/no-danger */
import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownPage from '../containers/MarkdownPage';

export default function MarkdownPageTemplate({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <MarkdownPage title={frontmatter.title} html={html}  />
    </Layout>
  );
}

export function Head({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <title>
      {frontmatter.title}
      {' '}
      | The Basics Project Foundation
    </title>
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
