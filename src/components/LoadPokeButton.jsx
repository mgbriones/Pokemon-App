import React from "react";

function LoadPokeButton({ showData }) {
  return (
    <div className="grid place-content-center pb-16">
      <button
        className="
        text-white 
        text-bold 
        bg-purple-600 
        hover:bg-purple-400 
        p-2 
        rounded"
        onClick={showData}
        on
      >
        Load More Pokemon
      </button>
    </div>
  );
}

export default LoadPokeButton;
