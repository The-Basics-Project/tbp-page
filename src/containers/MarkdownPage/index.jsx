import React from 'react';
import './index.scss';

function MarkdownPage({ title, html }) {
  return (
    <div className='markdown'>
      <h1
        className='title'
      >
        {title}
      </h1>
      <div
        className='content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export default MarkdownPage;
