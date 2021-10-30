import React from "react";
import "./NewsItem.css";

const NewsItem = (props) => {
  return (
    <div className="news-item col-sm-6 col-md-4 col-lg-3 col-12">
      <div className="card rounded" style={{ height: "100%" }}>
        <img src={props.item.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">{props.item.description}</p>
          <div>
            <a
              href={props.item.url}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
