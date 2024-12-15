import html2pdf from "html2pdf.js";
import { PiX } from "react-icons/pi";

// Add data-html2canvas-ignore attribute to hide element

const DownloadPDF = ({ filename, contentRef }) => {
  const pdfOptions = {
    filename,
    margin: 1,
  };

  const convertToPDF = async () => {
    const content = contentRef.current;
    html2pdf().set(pdfOptions).from(content).save();
  };

  return (
    <div data-html2canvas-ignore>
      <button className="downloadPDF-button" onClick={convertToPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPDF;
