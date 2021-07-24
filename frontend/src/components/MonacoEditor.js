import Editor from "@monaco-editor/react";
import { useParams } from "react-router-dom";
export default function MEditor(props) {
  const curTheme = props.curTheme;
  const { id } = useParams();

  return (
    <Editor
      theme={curTheme === "light" ? "light" : "vs-dark"}
      height="88vh"
      defaultLanguage="javascript"
      defaultValue={id ? "content from " + id : "//Enter text"}
      colorDecorators="true"
    />
  );
}
