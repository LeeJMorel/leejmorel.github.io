import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Network from "./Network";
import Filters from "./Filters";
import { FilterOption, defaultFilter, filterOptions } from "./types";

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentFilter, setCurrentFilter] =
    useState<FilterOption>(defaultFilter);

  const handleFilterChange = (filter: FilterOption) => {
    setCurrentFilter(filter);
  };

  return (
    <>
      <header className="app-header">
        <button onClick={openLinkedInPage}>View LinkedIn</button>
        <h1 className="title">Lee Janzen-Morel</h1>
        <button>Download CV</button>
      </header>

      <aside className={`mobile-menu ${isMobile ? "isVisible" : ""}`}>
        <div className="mobile-menu-content" ref={menuContentRef}>
          <div className="mobile-menu-content.row">
            <button onClick={openLinkedInPage}>View LinkedIn</button>
            <button>Download CV</button>
          </div>
          <Filters
            filterOptions={filterOptions}
            onFilterChange={handleFilterChange}
            isMobile={true}
          />
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

      <footer className="app-footer">
        <div className="filter-container">
          <Filters
            filterOptions={filterOptions}
            onFilterChange={handleFilterChange}
            isMobile={false}
          />
        </div>
      </footer>
    </>
  );
}

export default App;
