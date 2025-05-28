import React from "react";
import "./Loading.scss";

const Loading = ({ message }) => {
  return (
    <div className="widget-loader">
      <div className="loader">
        <svg className="circular-loader" viewBox="25 25 50 50">
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#70c542"
            strokeWidth="4"
          />
        </svg>
        <div className="loading-text">{message}</div>
      </div>
    </div>
  );
};

export default Loading;
