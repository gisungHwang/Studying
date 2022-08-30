import './MiniPageLink.css';
import React from 'react';

const MiniPageLink = ({ page, handlepage }) => {
  return (
    <div className='page'>
      [
      <a id={page} onClick={handlepage}>
        {page}
      </a>
      ]
      &nbsp;
    </div>
  );
};

export default MiniPageLink;