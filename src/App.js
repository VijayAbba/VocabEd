import React, { useState } from "react";

export default function App() {
  const [cloze, setCount] = useState("apple");

  const [word, setWord] = useState(0);

  const upDateWord = (event) => {
    setWord(event.target.value);
  };

  const upCloze = (event) => {
    setCount(word);
  };

  const websites = [
    {
      web: `https://www.google.com/search?igu=1&ei=&q=${cloze} meaning`,
      id: 1,
    },
    {
      web: `https://dictionary.cambridge.org/dictionary/english/${cloze}`,
      id: 2,
    },
    {
      web: `https://www.dictionary.com/browse/${cloze}`,
      id: 3,
    },
    {
      web: `https://www.vocabulary.com/dictionary/${cloze}`,
      id: 4,
    },
    {
      web: `https://www.urbandictionary.com/define.php?term=${cloze}`,
      id: 5,
    },
    {
      web: `https://en.wiktionary.org/wiki/${cloze}`,
      id: 6,
    },
    {
      web: `https://www.thefreedictionary.com/${cloze}`,
      id: 7,
    },
    {
      web: `https://www.wordhippo.com/what-is/another-word-for/${cloze}.html`,
      id: 8,
    },
    {
      web: `https://visuwords.com/${cloze}`,
      id: 9,
    },
    {
      web: `https://www.pexels.com/search/${cloze}`,
      id: 10,
    },
  ];

  return (
    <div className=" md:block">
      <h1 className="mt-2 text-center text-2xl">What does that even mean?</h1>
      <div className="flex justify-center items-center">
        <div className="  mb-4">
          <input
            onChange={upDateWord}
            className="m-2 p-1 rounded-md border-2 border-slate-300 text-md "
            type="text"
            placeholder="Search"
          />
          <button
            className="bg-slate-500 text-white rounded-lg p-1 hover:bg-blue-500"
            onClick={upCloze}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-zinc-100">
        {websites.map((eachWeb) => (
          <iframe
            key={eachWeb.id}
            sandbox="allow-scripts"
            className="h-[580px] w-[95vw] md:w-[340px] md:m-3 drop-shadow-2xl text-xs rounded-md border-8 md:border-4 border-amber-300"
            src={eachWeb.web}
          ></iframe>
        ))}
      </div>
    </div>
  );
}
