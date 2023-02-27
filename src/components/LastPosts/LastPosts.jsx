import Media from "react-media";
import separator from "../functions/seperator";
import PostCard from "../Posts/PostCard";

const LastPosts = (params) => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1920px)",
          large: "(min-width: 768px)",
        }}
      >
        {(matсhes) => (
          <>
            {matсhes.small && (
              <div className="container__news__index">
                {params?.news?.map((item, index) => (
                  <PostCard
                    key={item.id}
                    id={item.id}
                    title={separator(item.title, 40)}
                    preview_image={
                      `${import.meta.env.PUBLIC_URL}` + item.preview_image.url
                    }
                    news_preview={separator(item.news_preview, 70)}
                    body={separator(item.body, 70)}
                    createdAt={item.createdAt}
                  />
                ))}
              </div>
            )}
            {matсhes.large && (
              <div className="index-news-block">
                <div className="top-block flex">
                  <div className="block-name">Новости</div>
                  <a href="news">Все новости</a>
                </div>
                <div className="flex">
                  {params?.news?.map((item, index) => {
                    if (index === 0) {
                      return (
                        <div
                        key={index}
                          className="big-item"
                          style={{
                            backgroundImage: `url('${
                              import.meta.env.PUBLIC_URL
                            }${item.preview_image.url}')`,
                          }}
                        >
                          <div className="text">
                            <div className="text__bg"></div>
                            <a href="#">
                              {item.title}
                            </a>
                            <div className="date">19 августа 2021, 7:06</div>
                          </div>
                        </div>
                      );
                    } else {
                      let string = item.title;
                      if (string.length > 60) {
                        string = string.substring(0, 60) + "...";
                      }

                      const date = new Date(item.publishedAt);
                      const timestamp = date.valueOf();
                      const formattedDate = new Intl.DateTimeFormat("ru-RU", {
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      }).format(timestamp);

                      return (
                        <div className="item other">
                          <img
                            src={`${import.meta.env.PUBLIC_URL}${
                              item.preview_image.url
                            }`}
                          />
                          <div>{string}</div>
                          <div className="date">{formattedDate}</div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default LastPosts;
