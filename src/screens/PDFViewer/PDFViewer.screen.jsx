import React, { useState, useEffect } from "react";
import PDFViewerComponent from "./PDFViewer.component";
import { postWeekPDF } from "../../client/api";

import { useLocation } from "react-router-dom";

import "@react-pdf-viewer/core/lib/styles/index.css";

let base64String =
  "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G";

const pdfContentType = "application/pdf";

const PDFViewer = (props) => {
  const [pdfURL, setPdfURL] = useState("blob:http://localhost:3000/33wssd");
  const location = useLocation([]);
  const { curp, ssn } = location.state;

  useEffect(() => {
    getPDF();
  }, []);

  const getPDF = async () => {
    console.log("CURP: ", curp);
    console.log("NSS: ", ssn);
    const response = await postWeekPDF({ curp: curp, ssn: ssn });
    console.log("Response: ", response);
    console.log("pdf base64: ", response.body.data.PDFBase64);
    base64String = URL.createObjectURL(base64toBlob(response.body.data.PDFBase64));
    // base64String = URL.createObjectURL(base64toBlob(base64String));
    console.log("URL created: ", base64String);
    setPdfURL(base64String);
  };

  const base64toBlob = (data) => {
    // Cut the prefix `data:application/pdf;base64` from the raw base 64
    const base64WithoutPrefix = data.substr(`data:${pdfContentType};base64,`.length);

    const bytes = atob(data);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: pdfContentType });
  };

  return (
    <div>
      <PDFViewerComponent pdfURL={pdfURL} />
    </div>
  );
};

export default PDFViewer;
