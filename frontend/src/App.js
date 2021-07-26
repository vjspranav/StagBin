import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
// import MyEditor from "./components/MyEditor";
// import TopBar from "./components/Topbar";
// import BottomBar from "./components/BottomBar";
import MEditor from "./components/MonacoEditor";
import MobileTopAppBar from "./components/MobileTopAppBar";
import TopAppBar from "./components/TopAppBar";
import BottomAppBar from "./components/BottomAppBar";

// For Theme
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import MediaQuery from "react-responsive";

function App() {
  let localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme ? localTheme : "light");
  const [readOnly, setReadOnly] = useState("false");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const handleKeyDown = (event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if (event.ctrlKey && charCode === "s") {
      event.preventDefault();
      console.log("Ctrl + S pressed");
    }

    // For Mac
    if (event.metaKey && charCode === "s") {
      event.preventDefault();
      console.log("Cmd + S pressed");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div onKeyDown={handleKeyDown} className="App" style={{}}>
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <MediaQuery maxWidth={480}>
                <MobileTopAppBar
                  toggle={themeToggler}
                  readOnlyToggle={setReadOnly}
                  readOnly={readOnly}
                  curTheme={theme}
                  isEditing={true}
                />
              </MediaQuery>
              <MediaQuery minWidth={480}>
                <TopAppBar
                  toggle={themeToggler}
                  readOnly={readOnly}
                  readOnlyToggle={setReadOnly}
                  curTheme={theme}
                  isEditing={true}
                />
              </MediaQuery>
            </div>
            <Switch>
              <Route exact path="/">
                <MEditor
                  curTheme={theme}
                  readOnly={readOnly}
                  setReadOnly={setReadOnly}
                />
              </Route>
              <Route path="/:id">
                <MEditor
                  curTheme={theme}
                  readOnly={readOnly}
                  setReadOnly={setReadOnly}
                />
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
