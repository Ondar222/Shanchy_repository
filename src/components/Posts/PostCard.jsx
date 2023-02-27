import React from "react";
import { unixTimeConverter } from "../functions/unixTime.Converter";

const PostCard = (params) => {
  if (!params) {
    return <h3>Empty post</h3>;
  } else {
    return (
      <div className="post__card" key={params.id}>
        <div className="image-container">
          <img
            alt="some"
            src={params.preview_image}
            width="300px"
            height="250px"
            className="post__card__img"
          />
        </div>

        <div className="content">
          <div className="header">
            <h1 className="heading">{params.title}</h1>
          </div>
          <div className="body">
            <p className="text-md">{params.news_preview}</p>
          </div>

          <div className="footer">
            <div className="date">
              <p className="data">Дата публикации: </p>
              <p className="unix">{unixTimeConverter(params.createdAt)}</p>
            </div>

            <div className="btn">
              <a
                href={`/news/post-${params.id}`}
                className="button"
              >
                Читать
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default PostCard;
