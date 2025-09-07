import React from "react";
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
      <nav
        className="document-reader__sidebar-nav"
        aria-label="Innehållsförteckning"
      >
        <ul className="document-reader__sidebar-list">
          <li>
            <div>
              <a href="#">Inledning</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Kapitel 1</a>
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
