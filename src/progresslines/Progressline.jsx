import './Progressline.css'
import { useEffect, useState } from "react";
import propTypes from 'prop-types'
import React from 'react'

const ProgressLine = ({
  isVisible,
  isMobile,
  label,
  backgroundColor = "#e5e5e5",
  // expected format for visual parts
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // You need to wrap it to trigger the animation
    isVisible && requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
       setWidths(
        visualParts.map(item => {
          return item.percentage;
        })
      );
    });
  }, [visualParts, isVisible]);

  return (
    <div>
      <div className="-mb-4 font-semibold text-secondary">{label}</div>
      <div
        className="progressVisualFull"
        // to change the background color dynamically
        style={{
          backgroundColor,
          width: isMobile ? "14rem" : "18rem",
        }}
      >
        {visualParts.map((item, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                width: widths[index],
                // setting the actual color of bar part
                backgroundColor: item.color
              }}
              className="progressVisualPart"
            />
            <div className="relative">
              <div className="text-secondary font-semibold absolute top-[13px] -left-3">{widths[index]}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

ProgressLine.propTypes = {
  isVisible: propTypes.node,
  isMobile: propTypes.node,
  label: propTypes.node,
  backgroundColor: propTypes.node,
  visualParts: propTypes.node,
};

export default ProgressLine;