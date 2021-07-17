import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Editor from "./components/Editor";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Editor />
      </Route>
      <Switch>
        <Route path="/:id" children={<Editor />} />
      </Switch>
    </Router>
  );
}

export default App;
