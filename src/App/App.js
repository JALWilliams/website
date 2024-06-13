import { useEffect, useState, useRef } from "react";
import "./styles.css";

// https://elastiq.ch/
function App() {
  const pageInner = useRef();
  const svgRef = useRef();
  const dimensions = useRef();
  useEffect(() => {
    const scrollEffect = () => {
      // Perform actions on window resize
      if (pageInner.current) {
        const { y, height } = pageInner.current.getBoundingClientRect();
        const calculatingScrollPercentage = Math.abs(y) / height;
        dimensions.current = calculatingScrollPercentage;
        svgRef.current.style.transform = `rotate(${
          dimensions.current * 200
        }deg) scale(Max(${dimensions.current * 3.5}, 1) `;
      }
    };
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className="page" ref={pageInner}>
      {/* <h1 class="logo__type logo__type--bg">Elastiq</h1> */}
      <div className="page__inner">
        <div aria-hidden="true" data-logo="" clas="logo">
          {" "}
          <svg
            class="logo__symbol"
            viewBox="0 0 238 175"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
          >
            {" "}
            <path
              class="elastiq"
              d="M37.691 70.72c25.89-7.67 59 2.55 80.49-31.66 25.23-40.099 60.94-44.679 85.27-31.619 34.2 18.36 31.67 68.27 7.58 90.7-27.42 25.53-29.58 52.91-13.68 67.24 22.95 20.68 47.1-2.67 35.85-19.93-8.94-13.73-31.93-25.89-98.1 6.9-65.32 32.36-129.62 19-133.91-32.42-1.03-12.53 2.88-39.25 36.5-49.21z"
              fill-rule="nonzero"
            ></path>{" "}
          </svg>{" "}
          <span class="logo__type logo__type--front">
            Ela<span>stiq</span>
          </span>{" "}
          <span class="logo__type logo__type--back">
            <span>Ela</span>stiq
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
