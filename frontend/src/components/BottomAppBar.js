import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    top: "auto",
  },
  toolbar: {
    minHeight: "20px",
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="white" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className="navbar-brand">
            {" "}
            <small style={{ color: "black" }}>
              &copy; Copyright 2021, vjspranav
            </small>{" "}
          </Link>{" "}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
