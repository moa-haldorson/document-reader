import { useState } from "react";
import DocContent from "../DocContent/DocContent";
import DocFooter from "../DocFooter/DocFooter";
import DocHeader from "../DocHeader/DocHeader";
import DocSideBar from "../DocSideBar/DocSideBar";
import "./App.scss";

const App = () => {
  const [readerOpen, setReaderOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => setReaderOpen(!readerOpen)}
        aria-expanded={readerOpen}
        aria-controls="document-reader"
      >
        Läs dokument
      </button>
      {readerOpen && (
        <div className="document-reader" id="document-reader">
          <div className="document-reader__container">
            <DocSideBar sideBarOpen={sideBarOpen} />
            <div
              className={`document-reader__container-group${
                sideBarOpen ? " document-reader__container-group--expanded" : ""
              }`}
            >
              <DocHeader
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}
                readerOpen={readerOpen}
                setReaderOpen={setReaderOpen}
              />
              <DocContent />
              <DocFooter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
