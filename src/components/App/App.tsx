import { useEffect, useState } from "react";
import html from "../../assets/data";
import DocReader from "../DocReader";
import "./App.scss";

/**
 * Main application component that includes a button to toggle the DocReader.
 * When the DocReader is open, it adds a class to the body to prevent background scrolling.
 */

const App: React.FC = () => {
  const [readerOpen, setReaderOpen] = useState(false);

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
      {readerOpen && <DocReader doc={html} setReaderOpen={setReaderOpen} />}
    </>
  );
};

export default App;
