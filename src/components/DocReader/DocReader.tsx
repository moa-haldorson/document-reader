import React, { useState } from "react";
import DocContent from "../DocContent";
import DocFooter from "../DocFooter";
import DocHeader from "../DocHeader";
import DocSideBar from "../DocSideBar";
import "./DocReader.scss";

interface DocReaderProps {
  doc: string;
  setReaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocReader: React.FC<DocReaderProps> = ({ setReaderOpen, doc }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <div className="document-reader__overlay"></div>
      <div
        aria-modal="true"
        className="document-reader"
        id="document-reader"
        tabIndex={-1}
        role="dialog"
      >
        <div className="document-reader__container">
          <DocHeader
            setReaderOpen={setReaderOpen}
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
          />
          <div className="document-reader__body">
            <DocSideBar sideBarOpen={sideBarOpen} />
            <DocContent docContent={doc} />
            <DocFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default DocReader;
