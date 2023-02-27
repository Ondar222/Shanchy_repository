import DocumentCard from "./DocumentCard";
import searchDocs from "../../store/search-docs";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const DocumentsFilter = observer((params) => {
  useEffect(() => {
    searchDocs.fetchDocsAll();
  }, []);

  return (
    <div className="input_document_page">
      <div>

      <div className="input_bank">
        <input
          defaultValue={searchDocs.doc_title}
          placeholder="Поиск по заголовку"
          value={searchDocs.query}
          onChange={(e) => searchDocs.filterDocsByTitle(e.target.value)}
          className="input_documents"
        />
      </div>
        <div className="input_type">
          <div className="input_input">

          <p>Поиск по типу</p>

          <select
            onChange={(e) => {
              if (e.target.value !== "все") {
                searchDocs.query = "";
                searchDocs.setType(e.target.value);
                // searchDocs.fetchDocsByTypes(searchDocs.type);
              } else {
                searchDocs.query = "";
                searchDocs.fetchDocsAll();
              }
            }}
            className="input_all"
          >
            <option key="все" value="все">
              Все
            </option>
            {/* {searchDocs.types.map((item) => {
              return (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              );
            })} */}
          </select>
        </div>
          </div>
      </div>
     
      <div className="document_doc">
        {searchDocs?.result?.map((item) => {
          return (
            <DocumentCard
              key={item.id}
              id={item.id}
              name={item.title}
              date={item.signing_date}
              url={item.file.url}
              // types={item.document_types}
            />
          );
        })}
      </div>
    </div>
     
  );
});

export default DocumentsFilter;
