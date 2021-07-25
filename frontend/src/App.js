import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
// import MyEditor from "./components/MyEditor";
// import TopBar from "./components/Topbar";
// import BottomBar from "./components/BottomBar";
import MEditor from "./components/MonacoEditor";
import TopAppBar from "./components/TopAppBar";
import BottomAppBar from "./components/BottomAppBar";

// For Theme
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  let localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme ? localTheme : "light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App" style={{}}>
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <TopAppBar
                toggle={themeToggler}
                curTheme={theme}
                isEditing={true}
              />
            </div>
            <Switch>
              <Route exact path="/">
                <MEditor curTheme={theme} />
              </Route>
              <Route path="/:id">
                <MEditor curTheme={theme} />
              </Route>
            </Switch>
            <div>
              <BottomAppBar curTheme={theme} />
            </div>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
