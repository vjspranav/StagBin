import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyEditor from "./components/MyEditor";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <MyEditor />
        </Route>
        <Route path="/:id">
          <MyEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
