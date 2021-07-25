import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { Button } from "@material-ui/core";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(2),
    minHeight: "10px",
  },
  centerItems: {
    justifyContent: "space-between",
  },
  urlEdit: {
    justifyContent: "center",
    marginLeft: "500px",
    paddingBottom: "15px",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BackToTop(props) {
  const curTheme = props.curTheme;
  const isEditing = props.isEditing;
  // 0 = white, 1 = dark
  const [icon, setIcon] = useState(curTheme === "dark");
  const [url, setUrl] = useState("");
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ background: "inherit", color: "inherit" }}>
        <Toolbar className={classes.centerItems}>
          <Typography variant="h6">StagBIN</Typography>
          <FormControl>
            <InputLabel htmlFor="custom-url">URL</InputLabel>
            <Input
              id="custom-url"
              type="text"
              value={url}
              onChange={(e) => {
                console.log(e.target.value);
                setUrl(e.target.value);
              }}
              style={{ color: "inherit" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="cop"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  ></IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div>
            {isEditing ? (
              <Tooltip title="Save">
                <IconButton edge="end" color="inherit" aria-label="Save">
                  <SaveIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Edit">
                <IconButton edge="end" color="inherit" aria-label="Save">
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="New Paste">
              <IconButton edge="end" color="inherit" aria-label="Save">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Button
              color="inherit"
              onClick={() => {
                props.toggle();
                setIcon(!icon);
              }}
            >
              {icon ? <WbSunnyIcon /> : <NightsStayIcon />}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
