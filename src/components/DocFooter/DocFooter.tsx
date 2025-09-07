import "./DocFooter.scss";

interface DocFooterProps {
  sideBarOpen: boolean;
  headings: Array<HTMLHeadingElement>;
  scrollProgress: number;
}

const DocFooter: React.FC<DocFooterProps> = ({
  sideBarOpen,
  headings,
  scrollProgress,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="document-reader__footer">
      <div
        className={`document-reader__footer-content ${
          sideBarOpen ? "document-reader__footer-content--expanded" : ""
        }`}
      >
        <div className="document-reader__timeline">
          <nav
            className="document-reader__timeline-progress"
            style={{ width: `${scrollProgress}%` }}
          >
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className="document-reader__timeline-item"
                onClick={(e) => handleClick(e, heading.id)}
              >
                <span className="visually-hidden">{heading.textContent}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default DocFooter;
