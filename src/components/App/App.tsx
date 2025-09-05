import { useState } from "react";
import DocContent from "../DocContent/DocContent";
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
      >
        Läs dokument
      </button>
      {readerOpen && (
        <div className="document-reader">
          <div className="document-reader__container">
            <div className="document-reader__container-group">
              <DocHeader
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}
                readerOpen={readerOpen}
                setReaderOpen={setReaderOpen}
              />
              <DocSideBar sideBarOpen={sideBarOpen} />
            </div>
            <DocContent />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
