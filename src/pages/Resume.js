import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "../assets/software resume.pdf";
import "../styles/Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `pdfjs-dist/build/pdf.worker.min.js`;  // Set the worker source as string

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfError(null); // Clear any previous errors on successful load
  };

  const onDocumentLoadError = (error) => {
    console.error("PDF Load Error:", error);
    setPdfError('Failed to load PDF file. Please ensure the file exists.');
  };

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      {pdfError && <p className="pdf-error">{pdfError}</p>}
      <div className="pdf-viewer">
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page pageNumber={pageNumber} renderAnnotationLayer={false} />
        </Document>
        <div className="pdf-controls">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={goToPrevPage}
          >
            Prev
          </button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={goToNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;