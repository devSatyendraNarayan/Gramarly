import { createContext, useState } from "react";
import run from "../Config/Gemini";

// Create the context
export const Context = createContext();

const ContextProvider = (props) => {
  // State management
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // Function to handle sending the prompt
  const onSent = async (prompt) => {
    try {
      // Reset result data and set loading state
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      // Run the prompt and update state with response
      const response = await run(input); // Use the 'prompt' parameter
      setResultData(response);
      setPrevPrompts((prev) => [...prev, prompt]); // Save prompt to history
      
    } catch (error) {
      console.error("Error running prompt:", error);
      setShowResult(false); // Hide result in case of error
    } finally {
      setLoading(false); // Ensure loading is false regardless of error
    }
  };

  // Context value object
  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
    onSent,
  };

  // Return the context provider with children
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
