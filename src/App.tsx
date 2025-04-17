import { useEffect, useMemo, useRef, useState } from "react";
import "./App.scss";
import Network from "./components/Network";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { Button, IconButton } from "@mui/material";
import { Category, categories } from "./types";
import CategoryToggle from "./components/CategoryToggle";
import ContentGrid from "./components/ContentGrid";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Resume from "./data/resumeNetwork.json";
import CircularPacking from "./components/CircularPacking";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768 || window.innerHeight <= 500
  );
  const menuContentRef = useRef<HTMLDivElement | null>(null);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {});
  }, []);

  //this checks if we are in mobile
  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setScreenDimensions({
        width: newWidth,
        height: newHeight,
      });

      setIsMobile(newWidth <= 768 || newHeight <= 500);
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

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  //background animation
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#242424",
        },
        image: "url('https://particles.js.org/images/background3.jpg')",
        size: "cover",
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: {
              r: 36,
              g: 36,
              b: 36,
            },
          },
          opacity: 1,
        },
        enable: true,
      },
      clear: true,
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
        modes: {
          bubble: {
            distance: 400,
            size: 100,
            duration: 2,
            opacity: 1,
            speed: 100,
            mix: false,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 100,
            easing: "ease-out-quad",
          },
          remove: {
            quantity: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 250,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          enable: true,
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          limit: {
            mode: "delete",
            value: 0,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
          stroke: {
            width: 20,
            color: "#000000",
          },
        },
        size: {
          value: { min: 10, max: 30 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const openLinkedInPage = () => {
    window.open("https://www.linkedin.com/in/leejmorel", "_blank");
  };

  const downloadPdf = () => {
    const pdfPath = "/LeeJMorelResume2025.pdf";

    // Create a hidden anchor tag
    const anchor = document.createElement("a");
    anchor.href = pdfPath;
    anchor.download = "LeeJMorelResume2025.pdf";

    // Simulate a click on the anchor to trigger the download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const openEmailClient = () =>
    (window.location.href = "mailto:ljanzen@uw.edu");

  const [showExpandedHeader, setShowExpandedHeader] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.ShowNetwork
  );

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const openMenu = () => {
    // Toggle the visibility of the expanded header
    setShowExpandedHeader(!showExpandedHeader);
  };
  const graphData = Resume;

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
          <CategoryToggle
            categories={categories}
            onCategorySelect={handleCategorySelect}
            isMobile={false}
          />
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
          <CategoryToggle
            categories={categories}
            onCategorySelect={handleCategorySelect}
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
          {selectedCategory === Category.ShowNetwork && (
            <>
              {!isMobile ? (
                <Network />
              ) : (
                <CircularPacking
                  data={graphData.nodes}
                  width={screenDimensions.width}
                  height={screenDimensions.height}
                />
              )}
              <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
              />
            </>
          )}
          {selectedCategory !== Category.ShowNetwork && (
            <ContentGrid type={selectedCategory} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
