import "./PageLink.css";
import React from "react";

const PageLink = ({ page, handlepage }) => {
  return (
    <div className="center_page">
      <div className="page">
        [
        <a id={page} onClick={handlepage}>
          {page}
        </a>
        ] &nbsp;
      </div>
    </div>
  );
};

export default PageLink;
