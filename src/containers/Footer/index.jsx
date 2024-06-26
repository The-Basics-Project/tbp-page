import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import logoWhite from '../../images/icon-white.svg';
import './index.scss';

const socialMediaHandlesMap = {
  '0-instagram': { name: '0-instagram', handle: '@thebasicsprojectofficial', url: 'https://www.instagram.com/thebasicsprojectofficial/' },
  '1-linkedin': { name: '1-linkedin', handle: 'The Basics Project Foundation', url: 'https://www.linkedin.com/company/the-basics-project/' },
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
    <div className='footer_wrapper'>
    <div className="footer container">
      <div className='footer__left-column'>
        <img className="footer__logo" src={logoWhite} alt="The Basics Project Logo" />
        <div className="footer__links">
          <Link className="link" href="/privacy">Privacy</Link>
          <Link className="link" href="/terms">Terms</Link>
          <Link className="link" href="/refund-and-return">Refund & Return</Link>
          <Link className="link" href="/shipping-policy">Shipping</Link>
          <Link className="link" href="/contact-us">Contact Us</Link>
        </div>
      </div>
      <div className="footer__social">
        {socialMediaData.map((data) => (
          <div className="footer__social-item">
            <a target="_blank" href={data.url} rel="noreferrer">
              <img src={data.imageURL} alt={data.name} />
              <span>{data.handle}</span>
            </a>
          </div>
        ))}
      </div>
    </div></div>
  );
}

export default Footer;
