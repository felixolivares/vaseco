import React from "react";
// Plugins
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { Document, Page } from "react-pdf";

const PDFViewerComponent = (props) => {
  const { pdfURL = "" } = props;
  console.log("URL received: ", pdfURL);
  return (
    <div className="pdf-viewer__container">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
          width: "700px",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfURL} />
        </Worker>
      </div>
    </div>
  );
};

export default PDFViewerComponent;
