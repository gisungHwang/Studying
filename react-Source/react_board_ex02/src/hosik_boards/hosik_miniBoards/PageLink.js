import './PageLink.css';
import React from 'react';

const PageLink = ({ page, handlepage }) => {
  return (
    <div className='page'>
      [
      <a href='#' id={page} onClick={handlepage}>
        {page}
      </a>
      ]
      &nbsp;
    </div>
  );
};

export default PageLink;