import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      // pageSize:20
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5c2e910cd3764c06bbaf4755a7c2915f&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("Prev button");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5c2e910cd3764c06bbaf4755a7c2915f&page=${
      this.state.page + 1
    }&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {
      console.log("success");
    } else {
      console.log("next button");
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5c2e910cd3764c06bbaf4755a7c2915f&page=${
        this.state.page + 1
      }&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="mb-3">NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                  }
                  description={element.description}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
