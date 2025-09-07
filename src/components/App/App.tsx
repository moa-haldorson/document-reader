import { useEffect, useState } from "react";
import DocContent from "../DocContent/DocContent";
import DocFooter from "../DocFooter/DocFooter";
import DocHeader from "../DocHeader/DocHeader";
import DocSideBar from "../DocSideBar/DocSideBar";
import "./App.scss";

const App = () => {
  const [readerOpen, setReaderOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (readerOpen) {
      document.body.classList.add("reader-open");
    } else {
      document.body.classList.remove("reader-open");
    }

    return () => {
      document.body.classList.remove("reader-open");
    };
  }, [readerOpen]);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsSticky(scrollTop > 30);
  };

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
      <DocContent />
      {readerOpen && (
        <div
          className="document-reader"
          id="document-reader"
          onScroll={handleScroll}
        >
          <div className="document-reader__container">
            <DocSideBar sideBarOpen={sideBarOpen} isSticky={isSticky} />
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
                isSticky={isSticky}
              />
              <DocContent />
              <DocFooter sideBarOpen={sideBarOpen} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
