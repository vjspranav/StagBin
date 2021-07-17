import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Editor from "./components/Editor";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Editor />
        </Route>
        <Route path="/:id">
          <Editor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
