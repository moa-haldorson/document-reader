import React from "react";
import DocToc from "../DocToc";
import "./DocSideBar.scss";

interface DocSideBarProps {
  sideBarOpen: boolean;
}

/**
 * DocSideBar component represents the sidebar area of the document reader.
 * It contains the table of contents for the document.
 */

const DocSideBar: React.FC<DocSideBarProps> = ({ sideBarOpen }) => {
  return (
    <aside
      id="document-reader__sidebar"
      className={`document-reader__sidebar${
        sideBarOpen ? " document-reader__sidebar--expanded" : ""
      }`}
    >
      <DocToc />
    </aside>
  );
};

export default DocSideBar;
