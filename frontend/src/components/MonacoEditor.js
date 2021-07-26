import Editor, { DiffEditor } from "@monaco-editor/react";
import { useParams } from "react-router-dom";

export default function MEditor(props) {
  const curTheme = props.curTheme;
  const readOnly = props.readOnly;
  const setReadOnly = props.setReadOnly;
  const isDiff = false;

  const { id } = useParams();
  if (id) {
    setReadOnly(true);
  }
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
        options={{
          readOnly: readOnly,
        }}
      />
    </div>
  );
  console.log(readOnly);

  return isDiff ? diffEditor : editor;
}
