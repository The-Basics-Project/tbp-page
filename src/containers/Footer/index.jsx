import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import logoWhite from '../../images/icon-white.svg';
import './index.scss';

const socialMediaHandlesMap = {
  '0-instagram': { name: '0-instagram', handle: '@thebasicsproject_', url: 'https://www.instagram.com/thebasicsproject_/' },
  '1-linkedin': { name: '1-linkedin', handle: 'The Basics Project', url: 'https://www.linkedin.com/company/the-basics-project/' },
  '2-twitter': { name: '2-twitter', handle: 'basicsproject_', url: 'https://twitter.com/basicsproject_' },
  '3-email': { name: '3-email', handle: 'contact.thebasicsproject@gmail.com', url: 'mailto:contact.thebasicsproject@gmail.com' },
};

function Footer() {
  const socialMediaData = useStaticQuery(graphql`
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
  `).allFile.edges.map((file) => {
    const { handle, url } = socialMediaHandlesMap[file.node.name];
    return ({
      name: file.node.name,
      handle,
      url,
      imageURL: file.node.publicURL,

    });
  });
  return (
    <div className="footer">
      <img className="footer__logo" src={logoWhite} alt="The Basics Project Logo" />
      <div className="footer__social">
        {socialMediaData.map((data) => (
          <div className="footer__social-item">
            <img src={data.imageURL} alt={data.name} />
            <a target="_blank" href={data.url} rel="noreferrer">
              <span>{data.handle}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
