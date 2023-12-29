import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Network from "./Network";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { Button, IconButton } from "@mui/material";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuContentRef = useRef<HTMLDivElement | null>(null);

  //this checks if we are in mobile
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768 || window.innerHeight <= 500);
    }

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //get a dynamic width value for the side bar menu
  useEffect(() => {
    const menuContent = menuContentRef.current;
    const menu = menuContent?.parentElement;

    if (menuContent && menu) {
      const contentWidth = menuContent.offsetWidth;

      if (menuOpen) {
        menu.style.left = "0px";
      } else {
        menu.style.left = `-${contentWidth}px`;
      }
    }
  }, [menuOpen]);

  const openLinkedInPage = () => {
    window.open("https://www.linkedin.com/in/leejmorel", "_blank");
  };

  const downloadPdf = () => {
    const pdfPath = "/public/LeeJMorelResume.pdf";

    // Create a hidden anchor tag
    const anchor = document.createElement("a");
    anchor.href = pdfPath;
    anchor.download = "LeeJMorelResume.pdf";

    // Simulate a click on the anchor to trigger the download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const openEmailClient = () =>
    (window.location.href = "mailto:ljanzen@cs.washington.edu");

  const [showExpandedHeader, setShowExpandedHeader] = useState(false);
  const openMenu = () => {
    // Toggle the visibility of the expanded header
    setShowExpandedHeader(!showExpandedHeader);
  };

  return (
    <>
      <header className="app-header">
        <IconButton onClick={openLinkedInPage} aria-label="View LinkedIn">
          <AiFillLinkedin />
        </IconButton>
        <Button onClick={openMenu} variant="outlined">
          {showExpandedHeader ? "- Closer Look" : "+ Closer Look"}
        </Button>
        <h1 className="title">Lee Janzen-Morel</h1>
        <Button onClick={downloadPdf} variant="outlined">
          Download CV
        </Button>
        <IconButton onClick={openEmailClient} aria-label="Send Email">
          <AiOutlineMail />
        </IconButton>
      </header>
      {showExpandedHeader && (
        <div className="app-header">
          {/* Add buttons for key parts of the resume */}
          <Button
            onClick={() => console.log("View Education")}
            variant="outlined"
          >
            View Education
          </Button>
          <Button
            onClick={() => console.log("View Experience")}
            variant="outlined"
          >
            View Experience
          </Button>
        </div>
      )}

      <aside className={`mobile-menu ${isMobile ? "isVisible" : ""}`}>
        <div className="mobile-menu-content" ref={menuContentRef}>
          <div className="mobile-menu-content.row">
            <IconButton onClick={openLinkedInPage} aria-label="View LinkedIn">
              <AiFillLinkedin />
            </IconButton>
            <Button onClick={downloadPdf} variant="outlined">
              Download CV
            </Button>
            <IconButton onClick={openEmailClient} aria-label="Send Email">
              <AiOutlineMail />
            </IconButton>
          </div>
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "<" : ">"}
        </button>
      </aside>

      <div className="app-container">
        <div className="app-body">
          {window.innerWidth > 768 || window.innerHeight < window.innerWidth ? (
            <Network />
          ) : (
            <p>View only enabled in landscape mode.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
