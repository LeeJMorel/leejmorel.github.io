import React from "react";

interface OnHoverTitleProps {
  label: string | null;
}

const OnHoverTitle: React.FC<OnHoverTitleProps> = ({ label }) => {
  const message = label
    ? `You're looking at the connections with ${label}. Double click to learn more.`
    : "Hover over a character to learn more";

  return (
    <div className="title-bar">
      <p>{message}</p>
    </div>
  );
};

export default OnHoverTitle;
