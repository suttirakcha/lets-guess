import { useState, useEffect } from "react";

const ThreeDots = () => {
  const [dot, setDot] = useState(".");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDot(prev => (prev === "." ? ".." : prev === ".." ? "..." : "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span>{dot}</span>;
};

export default ThreeDots;