import React from "react";
import "./DocContent.scss";

interface DocContentProps {
  docContent: string;
}

/**
 * DocContent component represents the main content area of the document reader.
 * It extracts all h1 headings from its content and sends them to the parent component
 * via the extractHeadings callback prop.
 */

const DocContent: React.FC<DocContentProps> = ({ docContent }) => {
  return (
    <div
      className="document-reader__content"
      dangerouslySetInnerHTML={{ __html: docContent }}
    ></div>
  );
};

export default DocContent;
