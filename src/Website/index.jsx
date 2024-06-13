import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const Website = () => {
  const [containerHeight, setContainerHeight] = useState("900px");
  const [sunRadius, setSunRadius] = useState(50);
  const [minimumCX, setMinimumCX] = useState(50);
  const [minimumCY, setMinimumCY] = useState(50);
  const pageContainer = useRef();
  const svgRef = useRef();

  useEffect(() => {
    const { width, height } = window.visualViewport;
    const calculatedStartPoints = width > 720 ? width / 8 : width / 4;

    setContainerHeight(height);
    setSunRadius(calculatedStartPoints);
    setMinimumCX(calculatedStartPoints);
    setMinimumCY(calculatedStartPoints);
  }, []);

  //   Setting radius of the sun as proportion of the width of the screen
  useEffect(() => {
    const handleResize = () => {
      const { width, height } = window.visualViewport;
      const calculatedStartPoints = width > 1440 ? width / 8 : width / 3;

      setContainerHeight(height);
      setSunRadius(calculatedStartPoints);
      setMinimumCX(calculatedStartPoints);
      setMinimumCY(calculatedStartPoints);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const { top, width } = pageContainer.current.getBoundingClientRect();

      const multipleFactorCY = width > 1440 ? 3.4 : width > 720 ? 2.2 : 1.8;
      const multipleFactorCX = width > 1440 ? 2.4 : width > 720 ? 1.9 : 1.4;

      if (svgRef.current) {
        svgRef.current.setAttribute(
          "cy",
          Math.max(
            minimumCY,
            Math.min(Math.abs(top) * multipleFactorCY, containerHeight)
          )
        );
        svgRef.current.setAttribute(
          "cx",
          Math.max(minimumCX, Math.min(Math.abs(top) * multipleFactorCX, width))
        );
      }
    };

    if (pageContainer.current) {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [minimumCX, minimumCY, containerHeight]);

  return (
    <div
      className="website"
      ref={pageContainer}
      style={{ minHeight: containerHeight }}
    >
      <svg className="svg-container" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={sunRadius}
          cy={sunRadius}
          r={sunRadius}
          className="sun"
          ref={svgRef}
        />
      </svg>
      <div className="page-top">
        <h2 className="name">Justine Williams</h2>
      </div>
      <div className="infobox">
        <h3>Newsroom Developer & Writer @Financial Times</h3>
        <div className="infobox-code">
          <h4>Code</h4>
          <div className="infobox-code-links">
            <p>
              <a href="https://www.ft.com/justine-williams" target="blank">
                Portfolio
              </a>
            </p>
            <p>
              <a href="https://github.com/JALWilliams" target="blank">
                GitHub
              </a>
            </p>
          </div>
        </div>
        <div className="infobox-social">
          <h4>Social</h4>
          <div className="infobox-social-links">
            <p>
              <a href="mailto:justine.williams@ft.com">Email</a>
            </p>
            <p>
              <a href="https://twitter.com/jalwilliams_" target="blank">
                Twitter
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/justinewilliams4/"
                target="blank"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/justine.williams245/?hl=en">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
