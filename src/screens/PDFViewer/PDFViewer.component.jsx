import React from "react";
// Plugins
import "./styles.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import CircularProgress from "@mui/material/CircularProgress";

import { Document, Page } from "react-pdf";

const PDFViewerComponent = (props) => {
  const { pdfURL = "", isLoading } = props;
  console.log("URL received: ", pdfURL);
  return (
    <div className="pdf-viewer__container">
      {pdfURL === "blob:" ? (
        <div className="pdf-viewer__loading-container">
          <CircularProgress />
        </div>
      ) : (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfURL} />
        </Worker>
      )}
    </div>
  );
};

export default PDFViewerComponent;
