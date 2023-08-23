import { useEffect, useRef, useState } from "react";

export const useIsHovered = (selector: string) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    useEffect(() => {
        const node = document.querySelector(selector);

        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
    }, [selector]);

    return isHovered;
  }