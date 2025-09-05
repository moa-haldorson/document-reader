import React from "react";
import "./DocSideBar.scss";

interface DocSideBarProps {
  sideBarOpen: boolean;
}

const DocSideBar: React.FC<DocSideBarProps> = ({ sideBarOpen }) => {
  return (
    <aside
      className={`document-reader__sidebar${
        sideBarOpen ? " document-reader__sidebar--expanded" : ""
      }`}
    >
      <nav>
        <ul>
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
        </ul>
      </nav>
    </aside>
  );
};

export default DocSideBar;
