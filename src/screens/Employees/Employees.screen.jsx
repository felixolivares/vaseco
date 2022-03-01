import React, { useEffect, useState } from "react";
import EmployeesComponent from "./Employees.component";
import { useLocation } from "react-router-dom";
import { postWeekPDF } from "../../client/api";
import { Buffer } from "buffer";

import { Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const base64String =
  "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G";

const Employees = (props) => {
  const [pdfURL, setPdfURL] = useState("");
  const [base64Saved, setBase64Saved] = useState(base64String);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const location = useLocation([]);
  const { employees } = location.state;
  useEffect(() => {
    getPDF();
  }, []);

  const onDocumentLoadSuccess = (numPages) => {
    setNumPages(numPages);
  };

  const getPDF = async () => {
    // const response = await postWeekPDF({ curp: "RURE941109HMCZVM03", ssn: "03179474592" });
    // console.log("Response: ", response);
    const url = URL.createObjectURL(base64toBlob(base64String));
    setPdfURL(url);
    console.log("PDF: ", url);

    let buff = new Buffer(base64String, "base64");
    let base64ToStringNew = buff.toString("ascii");
    setBase64Saved(base64ToStringNew);
    console.log("base 64", base64ToStringNew);
  };

  console.log("Employees: ", employees);

  const pdfContentType = "application/pdf";

  // const base64toBlob = (data) => {
  //   // Cut the prefix `data:application/pdf;base64` from the raw base 64
  //   const base64WithoutPrefix = data.substr("data:application/pdf;base64,".length);

  //   const bytes = atob(data);
  //   let length = bytes.length;
  //   let out = new Uint8Array(length);

  //   while (length--) {
  //     out[length] = bytes.charCodeAt(length);
  //   }

  //   return new Blob([out], { type: "application/pdf" });
  // };

  function base64toBlob(base64Data) {
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: "application/pdf" });
  }

  return (
    <div>
      <EmployeesComponent
        rows={employees}
        url={pdfURL}
        base64={setBase64Saved}
        pageNumber={pageNumber}
        numPages={numPages}
        onDocumentLoadSuccess={onDocumentLoadSuccess}
      />
    </div>
  );
};

export default Employees;
