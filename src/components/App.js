import React from "react";
import Searchbar from "./Searchbar";
import news from "../apis/news";
import NewsList from "./NewsList";

class App extends React.Component {
  state = { term: "", newsList: [] };

  componentDidMount() {
    this.onTermSubmit("trending");
  }

  onTermSubmit = async (term) => {
    console.log(term);

    const response = await news.get("", {
      params: {
        q: term,
      },
    });

    console.log(response.data.articles);
    this.setState({ newsList: response.data.articles });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onTermSubmit={this.onTermSubmit} />
        <NewsList newsList={this.state.newsList} />
      </div>
    );
  }
}

export default App;
