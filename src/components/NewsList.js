import React from "react";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  if (props.newsList == null || props.newsList.length === 0) {
    return (
      <div>
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
      </div>
    );
  }

  const renderedNews = props.newsList.map((item) => {
    return <NewsItem key={item.publishedAt + item.url} item={item} />;
  });

  return (
    <div className="grid my-4">
      <div className="row g-4">{renderedNews}</div>
    </div>
  );
};

export default NewsList;
