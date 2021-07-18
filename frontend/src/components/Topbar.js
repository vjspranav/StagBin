import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

import "bootstrap/dist/css/bootstrap.min.css";

const ThemeSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function TopBar(props) {
  const curTheme = props.curTheme;
  return (
    <div>
      <nav
        className={
          "navbar navbar-expand-lg fixed-top " +
          (curTheme === "light"
            ? "navbar-light bg-light"
            : "navbar-dark bg-dark")
        }
      >
        <Link to="/" className="navbar-brand">
          vjsbin
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item">
              <label>
                {curTheme === "light" ? "Light Theme" : "Dark Theme"}
              </label>
              <ThemeSwitch
                onChange={(e) => {
                  props.toggle();
                }}
                name="Dark"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
