import Editor, { DiffEditor } from "@monaco-editor/react";
import { useParams } from "react-router-dom";
export default function MEditor(props) {
  const curTheme = props.curTheme;
  const { id } = useParams();

  const diffEditor = (
    <DiffEditor
      height="90vh"
      defaultLanguage="javascript"
      original=""
      modified={id}
    />
  );

  const editor = (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Editor
        theme={curTheme === "light" ? "light" : "vs-dark"}
        height="88vh"
        defaultLanguage="javascript"
        defaultValue={id ? "content from " + id : "//Enter text"}
        colorDecorators="true"
        automaticLayout="true"
      />
    </div>
  );
  console.log(id);

  return id ? diffEditor : editor;
}
