import React, { useState,useContext } from "react";
import { Context } from "../Context/Context";
import { FaRegCopy } from "react-icons/fa6";
import { GoPaste } from "react-icons/go";
import { AiFillThunderbolt } from "react-icons/ai";

function DisplaySection() {
  const { onSent, showResult, loading, resultData, setInput, input } =
    useContext(Context);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setErrorMessage("Please enter a sentence.");
    } else {
      setErrorMessage("");
      onSent(input);
    }
  };

  const handleCopy = () => {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.select();
    document.execCommand("copy");
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Input Section */}
        <div className="w-full px-3 lg:w-1/2 ">
          <label
            htmlFor="inputMessage"
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
          >
            Enter Your Sentence
          </label>
          <div className="relative">
            <textarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
              id="inputMessage"
              name="inputMessage"
              rows="10"
              maxLength="300"
              required
              placeholder="Type your sentence here for a grammar makeover! 🌟"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y"
            />
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <div className="tooltip tooltip-accent" data-tip="Paste">
                <button
                  onClick={() =>
                    navigator.clipboard
                      .readText()
                      .then((text) => setInput(text))
                  }
                  className="p-2  btn btn-ghost text-gray-950 btn-circle"
                >
                  <GoPaste size={20} />
                </button>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                disabled={input.trim() === ""}
                className="rounded-lg p-2 bg-green-500/60 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"
              >
                <AiFillThunderbolt size={20} />
                <span className="font-bold">Correct now!</span>
              </button>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="w-full px-3 lg:w-1/2">
          <label
            htmlFor="resultMessage"
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
          >
            Polished Sentence
          </label>
          <div className="relative">
            <textarea
              id="resultMessage"
              name="resultMessage"
              rows="10"
              maxLength="350"
              readOnly
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y"
              value={loading ? "" : resultData}
              placeholder="Waiting for the result..."
            />
            {!loading && (
              <div className="absolute bottom-2 right-2">
                <div className="tooltip tooltip-accent" data-tip="Copy">
                  <button onClick={handleCopy} className="btn btn-circle">
                    <FaRegCopy size={20} />
                  </button>
                </div>
              </div>
            )}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="animate-spin h-8 w-8 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplaySection;
