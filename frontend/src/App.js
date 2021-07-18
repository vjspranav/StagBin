import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import MyEditor from "./components/MyEditor";
import TopBar from "./components/Topbar";
import BottomBar from "./components/BottomBar";

// For Theme
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { light } from "@material-ui/core/styles/createPalette";

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
        <div
          className="App"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <TopBar toggle={themeToggler} curTheme={theme} />
            </div>
            <Switch>
              <Route exact path="/">
                <MyEditor />
              </Route>
              <Route path="/:id">
                <MyEditor />
              </Route>
            </Switch>
            <div>
              <BottomBar curTheme={theme} />
            </div>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
