import { GrDocumentPdf } from "react-icons/gr/index.js";

const DocumentLink = (params) => {
  return (
    <div className="document__link">
      <GrDocumentPdf className="document__link__icon" />
      <a href={params.url} className="document__link__title">
        {params.filename}
      </a>
    </div>
  );
};

export default DocumentLink;
