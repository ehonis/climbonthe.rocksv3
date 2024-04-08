"use client";
import React, { useEffect, useRef } from "react";

function ExpandingTextarea() {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const resize = () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
    textarea.addEventListener("input", resize, false);
    return () => {
      textarea.removeEventListener("input", resize, false);
    };
  }, []);

  return (
    <textarea
      ref={textareaRef}
      className="w-[90%] resize-none rounded-lg bg-bg0 p-2 text-white placeholder:top-1/4"
      placeholder="add a comment..."
      rows="1" // adjust this to change the default number of visible lines
      cols="30"
    ></textarea>
  );
}

export default ExpandingTextarea;
