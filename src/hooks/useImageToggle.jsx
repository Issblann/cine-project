import { useState } from "react";

const useToggleText = (initialState = false) => {
  const [showText, setShowText] = useState(initialState);

  const toggleText = () => {
    setShowText(!showText);
  };

  return [showText, toggleText];
};

export default useToggleText;
