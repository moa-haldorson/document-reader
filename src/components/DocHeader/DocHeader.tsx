import React from "react";
import "./DocHeader.scss";

interface DocHeaderProps {
  sideBarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
  readerOpen: boolean;
  setReaderOpen: (open: boolean) => void;
}

const DocHeader: React.FC<DocHeaderProps> = ({
  sideBarOpen,
  setSideBarOpen,
  readerOpen,
  setReaderOpen,
}) => {
  return (
    <header className={`document-reader__header`}>
      <button
        className="document-reader__header-button"
        onClick={() => setSideBarOpen(!sideBarOpen)}
        aria-expanded={sideBarOpen}
      >
        Innehållsförteckning
      </button>
      <div className="document-reader__header-group">
        <button className="document-reader__header-button">Skriv ut</button>
        <button className="document-reader__header-button">Ladda ner</button>
        <button
          className="document-reader__header-button"
          onClick={() => setReaderOpen(false)}
          aria-expanded={readerOpen}
        >
          Stäng
        </button>
      </div>
    </header>
  );
};

export default DocHeader;
