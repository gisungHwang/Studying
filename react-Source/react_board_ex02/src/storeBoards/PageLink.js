import "./PageLink.css";

const PageLink = ({ page, handlepage }) => {
  return (
    <div class="page">
      [
      <a id={page} onClick={handlepage}>
        {page}
      </a>
      ] &nbsp;
    </div>
  );
};

export default PageLink;
