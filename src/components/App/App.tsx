import { useCallback, useEffect, useState } from "react";
import DocContent from "../DocContent/DocContent";
import DocFooter from "../DocFooter/DocFooter";
import DocHeader from "../DocHeader/DocHeader";
import DocSideBar from "../DocSideBar/DocSideBar";
import "./App.scss";

const App = () => {
  const [readerOpen, setReaderOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [headings, setHeadings] = useState<Array<HTMLHeadingElement>>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll event to set sticky header and scroll progress
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const container = e.currentTarget;

    setIsSticky(container.scrollTop > 30); // Top margin of document-reader__container is 30px

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(Math.min(progress, 100));
  };

  // Extract headings from the document content
  const handleExtractHeadings = useCallback(
    (headings: Array<HTMLHeadingElement>) => {
      setHeadings(headings);
    },
    []
  );

  // Add or remove class to body when reader is open
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
      <h2>Sidan bakom dokumentet</h2>
      <p>
        Detta är sidan bakom dokumentläsaren. När du klickar på knappen "Läs
        dokument" öppnas dokumentläsaren ovanpå denna sida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eu aliquam nisl nunc
        eu nunc. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc,
        eu aliquam nisl nunc eu nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eu aliquam nisl nunc
        eu nunc. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc,
        eu aliquam nisl nunc eu nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eu aliquam nisl nunc
        eu nunc. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc,
        eu aliquam nisl nunc eu nunc.
      </p>

      {readerOpen && (
        <div
          className="document-reader"
          id="document-reader"
          onScroll={handleScroll}
        >
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
                isSticky={isSticky}
              />
              <DocContent extractHeadings={handleExtractHeadings} />
              <DocFooter
                sideBarOpen={sideBarOpen}
                headings={headings}
                scrollProgress={scrollProgress}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
