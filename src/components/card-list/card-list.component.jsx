import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.scss";

const CardList = ({ videos }) => (
  <div className="card-list">
    {videos.videos.map((video) => (
      <Card key={video.text} video={video} />
    ))}
  </div>
);

export default CardList;
