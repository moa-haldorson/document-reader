import React from "react";
import "./DocHeader.scss";

interface DocHeaderProps {
  setReaderOpen: (open: boolean) => void;
  sideBarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
}

// todo: add functionality to buttons (print, download), maybe make buttons separate component

/**
 * DocHeader component represents the header area of the document reader.
 * It contains controls for the sidebar and the document viewer.
 */

const DocHeader: React.FC<DocHeaderProps> = ({
  setReaderOpen,
  sideBarOpen,
  setSideBarOpen,
}) => {
  return (
    <header className="document-reader__header">
      <button
        className={`document-reader__header-button document-reader__header-button--sidebar${
          sideBarOpen ? " document-reader__header-button--expanded" : ""
        }`}
        onClick={() => setSideBarOpen(!sideBarOpen)}
        aria-expanded={sideBarOpen}
        aria-controls="document-reader__sidebar"
      >
        <span>{sideBarOpen ? "⨉" : "☰"}</span>
        Innehållsförteckning
      </button>
      <div className="document-reader__header-group">
        <button className="document-reader__header-button">
          <span>🖨</span>
          Skriv ut
        </button>
        <button className="document-reader__header-button">
          <span>⬇️</span>
          Ladda ner
        </button>
        <button
          className="document-reader__header-button"
          onClick={() => setReaderOpen(false)}
        >
          <span>⨉</span>
          Stäng
        </button>
      </div>
    </header>
  );
};

export default DocHeader;
