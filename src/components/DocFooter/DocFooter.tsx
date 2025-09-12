import "./DocFooter.scss";

/**
 * DocFooter component represents the footer area of the document reader.
 * It contains the timeline for document navigation.
 */

const DocFooter: React.FC = () => {
  return (
    <footer className="document-reader__footer">
      <div className={`document-reader__footer-content`}>
        <div className="document-reader__timeline"></div>
      </div>
    </footer>
  );
};

export default DocFooter;
