import React, { useEffect, useRef } from "react";
import "./DocContent.scss";

interface DocContentProps {
  extractHeadings: (headings: Array<HTMLHeadingElement>) => void;
}

/**
 * DocContent component represents the main content area of the document reader.
 * It extracts all h1 headings from its content and sends them to the parent component
 * via the extractHeadings callback prop.
 */

const DocContent: React.FC<DocContentProps> = ({ extractHeadings }) => {
  const mainContentRef = useRef<HTMLElement>(null);

  // Extract headings on mount
  useEffect(() => {
    if (!mainContentRef.current || !extractHeadings) {
      return;
    }
    const headings = Array.from(mainContentRef.current.querySelectorAll("h1"));
    extractHeadings(headings);
  }, [extractHeadings]);

  return (
    <main className="document-reader__main" ref={mainContentRef}>
      <h1 id="heading-1">Huvudinnehåll</h1>
      <p>
        Detta är huvudinnehållet i dokumentläsaren. Här visas det valda
        dokumentet.
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
      <h1 id="heading-2">Nästa innehåll</h1>
      <p>
        Detta är nästa innehåll i dokumentläsaren. Här visas det valda
        dokumentet.
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
      <h1 id="heading-3">Nästa innehåll</h1>
      <p>
        Detta är nästa innehåll i dokumentläsaren. Här visas det valda
        dokumentet.
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
      <h1 id="heading-4">Nästa innehåll</h1>
      <p>
        Detta är nästa innehåll i dokumentläsaren. Här visas det valda
        dokumentet.
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
      <h1 id="heading-5">Nästa innehåll</h1>
      <p>
        Detta är nästa innehåll i dokumentläsaren. Här visas det valda
        dokumentet.
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
      <h1 id="heading-6">Nästa innehåll</h1>
      <p>
        Detta är nästa innehåll i dokumentläsaren. Här visas det valda
        dokumentet.
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
      <h1 id="heading-7">Nästa innehåll</h1>
      <p>
        Detta är nästa innehåll i dokumentläsaren. Här visas det valda
        dokumentet.
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
      <h1 id="heading-8">Nästa innehåll</h1>
      <p>
        Detta är nästa innehåll i dokumentläsaren. Här visas det valda
        dokumentet.
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
    </main>
  );
};

export default DocContent;
