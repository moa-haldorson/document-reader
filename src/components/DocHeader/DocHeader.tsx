import React from "react";
import "./DocHeader.scss";

interface DocHeaderProps {
  setReaderOpen: (open: boolean) => void;
  isSticky: boolean;
}

// todo: add functionality to buttons (print, download), maybe make buttons separate component

/**
 * DocHeader component represents the header area of the document reader.
 * It contains controls for the sidebar and the document viewer.
 */

const DocHeader: React.FC<DocHeaderProps> = ({ setReaderOpen, isSticky }) => {
  return (
    <header
      className={`document-reader__header${
        isSticky ? " document-reader__header--sticky" : ""
      }`}
    >
      <div className="document-reader__header-group">
        <button className="document-reader__header-button">🖨 Skriv ut</button>
        <button className="document-reader__header-button">⬇️ Ladda ner</button>
        <button
          className="document-reader__header-button"
          onClick={() => setReaderOpen(false)}
        >
          ⨉ Stäng
        </button>
      </div>
    </header>
  );
};

export default DocHeader;
