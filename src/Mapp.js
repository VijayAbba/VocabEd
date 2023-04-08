import React, { Component } from "react";
import Slider from "react-slick";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

export default class Mapp extends Component {
  state = { cloze: "apple", word: "0" };

  onChangeWord = (event) => {
    this.setState({ word: event.target.value });
  };

  onButtonClick = (event) => {
    this.setState((preState) => ({
      cloze: preState.word,
    }));
  };

  render() {
    const { cloze, word } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
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
      <div className="md:none">
        <h3 className="mt-2 text-center text-2xl">What does that even mean?</h3>
        <div className="flex justify-center items-center">
          <div className="mb-2">
            <input
              onChange={this.onChangeWord}
              className="m-2 p-1 rounded-md border-2 border-slate-300 text-md "
              type="text"
              placeholder="Search"
            />
            <button
              className="bg-slate-500 text-white rounded-lg p-1 hover:bg-blue-500"
              onClick={this.onButtonClick}
            >
              Search
            </button>
          </div>
        </div>

        <div className="">
          <Slider {...settings}>
            {websites.map((eachWeb) => (
              <div className="w-screen">
                <iframe
                  key={eachWeb.id}
                  sandbox="allow-scripts"
                  className="h-[550px] w-[80vw] md:w-[340px] md:m-3 rounded-md border-4 border-amber-300"
                  src={eachWeb.web}
                ></iframe>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
