import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import logoWhite from '../../images/icon-white.svg';
import './index.scss';

function Footer() {
  const socialImageFiles = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  return (
    <div className="footer">
      <img className="footer__logo" src={logoWhite} alt="The Basics Project Logo" />
      <div className="footer__social">
        {socialImageFiles.allFile.edges.map((file) => (
          <div className="footer__social-item">
            <img src={file.node.publicURL} alt={file.node.name} />
            <span>{file.node.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
