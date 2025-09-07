import React from "react";
import "./DocHeader.scss";

interface DocHeaderProps {
  sideBarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
  readerOpen: boolean;
  setReaderOpen: (open: boolean) => void;
  isSticky?: boolean;
}

const DocHeader: React.FC<DocHeaderProps> = ({
  sideBarOpen,
  setSideBarOpen,
  setReaderOpen,
  isSticky,
}) => {
  return (
    <header
      className={`document-reader__header${
        isSticky ? " document-reader__header--sticky" : ""
      }`}
    >
      <button
        className="document-reader__header-button"
        onClick={() => setSideBarOpen(!sideBarOpen)}
        aria-expanded={sideBarOpen}
        aria-controls="document-reader__sidebar"
      >
        Innehållsförteckning
      </button>
      <div className="document-reader__header-group">
        <button className="document-reader__header-button">Skriv ut</button>
        <button className="document-reader__header-button">Ladda ner</button>
        <button
          className="document-reader__header-button"
          onClick={() => setReaderOpen(false)}
        >
          Stäng
        </button>
      </div>
    </header>
  );
};

export default DocHeader;
