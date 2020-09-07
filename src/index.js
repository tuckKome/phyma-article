import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { render } from "@testing-library/react";
import MainTypo from "./maintypo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#ffbd80",
    color: "#e6ffff",
  },
  body: {
    backgroundColor: "#fff2e6",
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <AppBar position="relative" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Phyma
          </Typography>
        </Toolbar>
      </AppBar>
      <MainTypo />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
