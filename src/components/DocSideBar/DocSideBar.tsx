import React from "react";
import "./DocSideBar.scss";

interface DocSideBarProps {
  sideBarOpen: boolean;
  isSticky?: boolean;
}

const DocSideBar: React.FC<DocSideBarProps> = ({ sideBarOpen, isSticky }) => {
  return (
    <aside
      id="document-reader__sidebar"
      className={`document-reader__sidebar${
        sideBarOpen ? " document-reader__sidebar--expanded" : ""
      }${isSticky ? " document-reader__sidebar--sticky" : ""}
      `}
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
