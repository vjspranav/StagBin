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
import axios from "axios";

const get_and_set_systemid = async () => {
  let system_id = localStorage.getItem("stagbin_system_id");
  if (!system_id) {
    let res = await axios.get("https://api.stagbin.tk/paste/newSystemID");
    system_id = res.data.system_id;
    localStorage.setItem("stagbin_system_id", system_id);
  }
  return system_id;
};

const post_save = async (data, custom_url_code, system_id) => {
  const res = await axios.post("https://api.stagbin.tk/paste/new", {
    data,
    system_id,
    custom_url_code,
  });
  if (res.status === 200) {
    window.location.href = res.data.shortUrl;
  } else {
    console.log(res.status);
    console.log(res.data);
  }
};

function App() {
  let localTheme = localStorage.getItem("stagbin_theme");
  const [theme, setTheme] = useState(localTheme ? localTheme : "light");
  const [readOnly, setReadOnly] = useState(false);
  const [url, setUrl] = useState("");
  const [data, setData] = useState(
    "//Enter text and press ctrl + s to save, this also acts as a url shortner if you paste a http(s) url instead"
  );

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem("stagbin_theme", theme === "light" ? "dark" : "light");
  };

  const handleKeyDown = async (event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    const system_id = await get_and_set_systemid();
    if (event.ctrlKey && charCode === "s") {
      event.preventDefault();
      post_save(data, url, system_id);
      navigator.clipboard.writeText("https://stagbin.tk/" + url);
      alert("Url copied to clipboard");
    }

    // For Mac
    if (event.metaKey && charCode === "s") {
      event.preventDefault();
      console.log("Cmd + S pressed");
      post_save(data, url, system_id);
      navigator.clipboard.writeText("https://stagbin.tk/" + url);
      alert("Url copied to clipboard");
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
                  url={url}
                  setUrl={setUrl}
                />
              </MediaQuery>
              <MediaQuery minWidth={480}>
                <TopAppBar
                  toggle={themeToggler}
                  readOnly={readOnly}
                  readOnlyToggle={setReadOnly}
                  curTheme={theme}
                  isEditing={true}
                  url={url}
                  setUrl={setUrl}
                />
              </MediaQuery>
            </div>
            <Switch>
              <Route exact path="/">
                <MEditor
                  curTheme={theme}
                  readOnly={readOnly}
                  setReadOnly={setReadOnly}
                  url={url}
                  setUrl={setUrl}
                  data={data}
                  setData={setData}
                />
              </Route>
              <Route path="/:id">
                <MEditor
                  curTheme={theme}
                  readOnly={readOnly}
                  setReadOnly={setReadOnly}
                  url={url}
                  setUrl={setUrl}
                  data={data}
                  setData={setData}
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
