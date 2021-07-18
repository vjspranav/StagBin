import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import MyEditor from "./components/MyEditor";

// For Theme
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="Header">
          <button onClick={themeToggler}>Switch Theme</button>
        </div>
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
      </>
    </ThemeProvider>
  );
}

export default App;
