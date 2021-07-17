import { useParams } from "react-router-dom";

const Editor = () => {
  const { id } = useParams();
  return (
    <div className="App">
      {id ? "Content from " + id : "Please Enter Content"}
    </div>
  );
};

export default Editor;
