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
      title: "google",
    },
    {
      web: `https://dictionary.cambridge.org/dictionary/english/${cloze}`,
      id: 2,
      title: "cambridge",
    },
    {
      web: `https://www.dictionary.com/browse/${cloze}`,
      id: 3,
      title: "dictionary",
    },
    {
      web: `https://www.vocabulary.com/dictionary/${cloze}`,
      id: 4,
      title: "vocabulary",
    },
    {
      web: `https://www.urbandictionary.com/define.php?term=${cloze}`,
      id: 5,
      title: "urbandictionary",
    },
    {
      web: `https://en.wiktionary.org/wiki/${cloze}`,
      id: 6,
      title: "wiktionary",
    },
    {
      web: `https://www.thefreedictionary.com/${cloze}`,
      id: 7,
      title: "thefreedictionary",
    },
    {
      web: `https://www.wordhippo.com/what-is/another-word-for/${cloze}.html`,
      id: 8,
      title: "wordhippo",
    },
    {
      web: `https://visuwords.com/${cloze}`,
      id: 9,
      title: "visuwords",
    },
    {
      web: `https://www.pexels.com/search/${cloze}`,
      id: 10,
      title: "pexels",
    },
  ];

  return (
    <div className=" md:block">
      <h1 className="mt-2 text-center text-2xl">
        Learn Vocabulary
      </h1>
    <a src="https://github.com/VijayAbba">GitHub </a>
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
            credentialless="true"
            sandbox={
              eachWeb.title === "google" ? "allow-scripts" : "allow-same-origin"
            }
            scrolling="yes"
            title={eachWeb.title}
            className="h-[580px] w-[95vw] md:w-[340px] md:m-3 drop-shadow-2xl text-xs rounded-md border-8 md:border-4 border-amber-300"
            src={eachWeb.web}
          ></iframe>
        ))}
      </div>
    </div>
  );
}
