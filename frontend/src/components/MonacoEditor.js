import Editor, { DiffEditor } from "@monaco-editor/react";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import axios from "axios";

let reqData = {};
const getData = async (setData, id) => {
  // setLoading(true);
  const res = await axios.post("https://api.stagbin.tk/paste/get", {
    custom_url_code: id,
  });
  console.log(res);
  if (res.status === 200) {
    setData(res.data[0].data);
    reqData = res.data[0];
    console.log(reqData);
    // setLoading(false);
  }
  if (reqData.isUrl) {
    window.location.href = reqData.data;
  }
};

export default function MEditor(props) {
  const curTheme = props.curTheme;
  const readOnly = props.readOnly;
  const setReadOnly = props.setReadOnly;
  const isDiff = false;
  const [data, setData] = [props.data, props.setData];
  // const [loading, setLoading] = useState(false);
  const { id } = useParams();
  if (id) {
    setReadOnly(true);
    getData(setData, id);
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
        }}
      />
    </div>
  );

  return isDiff ? diffEditor : editor;
}
