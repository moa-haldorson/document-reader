import React from "react";
import "./DocSideBar.scss";

interface DocSideBarProps {
  sideBarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
}

/**
 * DocSideBar component represents the sidebar area of the document reader.
 * It contains the table of contents for the document.
 */

const DocSideBar: React.FC<DocSideBarProps> = ({
  sideBarOpen,
  setSideBarOpen,
}) => {
  return (
    <aside id="document-reader__sidebar" className="document-reader__sidebar">
      <button
        className={`document-reader__sidebar-button${
          sideBarOpen ? " document-reader__sidebar-button--expanded" : ""
        }`}
        onClick={() => setSideBarOpen(!sideBarOpen)}
        aria-expanded={sideBarOpen}
        aria-controls="document-reader__sidebar"
      >
        {sideBarOpen ? "⨉" : "☰"}
        Innehållsförteckning
      </button>
      <nav
        className={`document-reader__sidebar-nav${
          sideBarOpen ? " document-reader__sidebar-nav--expanded" : ""
        }`}
        aria-hidden={!sideBarOpen}
        id="document-reader__sidebar-nav"
        aria-label="Innehållsförteckning"
      >
        <ul className="document-reader__sidebar-list">
          <li>
            <div>
              <a href="#heading-1">Kapitel 1</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#heading-2">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#heading-3">Kapitel 3</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#heading-4">Kapitel 4</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#heading-5">Kapitel 5</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#heading-6">Kapitel 6</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#heading-7">Kapitel 7</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#heading-8">Kapitel 8</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 2</a>
              <button>+</button>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DocSideBar;
