const DocumentCard = (params) => (
  <div className="document__card">
    <div className="document__card__header">
      <h3>{params.name}</h3>
    </div>

    <div className="">
      <div className="">
        {/* {params.types.map((item) => {
          return (
            <button key={item.id} className="w-fit button dark:bg-gray-500">
              {item?.title}
            </button>
          );
        })} */}
      </div>
    </div>

    <div
      className="document__card__footer"
    >
      <div className="">
        Дата подписания {params.date}
      </div>
      <a
        href={`${import.meta.env.PUBLIC_URL}${params?.url}`}
        className="button"
      >
        Скачать
      </a>
    </div>
  </div>
);

export default DocumentCard;
