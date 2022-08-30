import "./PageLink.css";

const PageLink = ({ page, handlepage }) => {
  return (
    <div className="center_page">
      <div class="page">
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
