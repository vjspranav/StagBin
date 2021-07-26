import Editor, { DiffEditor } from "@monaco-editor/react";
import { useParams } from "react-router-dom";

export default function MEditor(props) {
  const curTheme = props.curTheme;
  const readOnly = props.readOnly;
  const setReadOnly = props.setReadOnly;
  const isDiff = false;
  const [data, setData] = [props.data, props.setData];
  const { id } = useParams();
  if (id) {
    setReadOnly(true);
  }
  // if (data) {
  //   document.getElementById("m-placeholder").style.display = "none";
  // }
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
        defaultValue={data}
        colorDecorators="true"
        options={{
          readOnly: readOnly,
        }}
        onChange={(value, event) => {
          setData(value);
          console.log(data);
        }}
      />
    </div>
  );

  return isDiff ? diffEditor : editor;
}
