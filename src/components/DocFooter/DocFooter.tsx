import "./DocFooter.scss";

interface DocFooterProps {
  sideBarOpen: boolean;
}

const DocFooter: React.FC<DocFooterProps> = ({ sideBarOpen }) => {
  return (
    <footer className="document-reader__footer">
      <div
        className={`document-reader__timeline ${
          sideBarOpen ? "document-reader__timeline--expanded" : ""
        }`}
      >
        timeline
      </div>
    </footer>
  );
};

export default DocFooter;
