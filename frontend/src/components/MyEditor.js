import { useParams } from "react-router-dom";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const MyEditor = () => {
  const { id } = useParams();
  const [convertedText, setConvertedText] = useState(id);
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={convertedText || ""}
        onChange={setConvertedText}
        style={{ minHeight: "100vh" }}
      />
    </div>
  );
};

export default MyEditor;
