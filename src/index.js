import React, { useEffect, useState } from "react";
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

import MainTypo from "./maintypo";

import MarkdownIt from "markdown-it";
import mk from "markdown-it-katex";

const md = new MarkdownIt();
md.use(mk);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff2e6",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
    backgroundColor: "#f78b29",
    backgroundImage: "linear-gradient(120deg, #f78b29, #f75a2a)",
    color: "#e6ffff",
  },
  toolbar: {
    backgroundColor: "rgba(53, 53, 53, 0.1)",
  },
  eyeCatch: {
    fontSize: "2rem",
    flexGrow: 1,
    // minHeight: 128,
  },
}));

function ProminentBar() {
  const classes = useStyles();
  const [titleText, setTitle] = useState("Hello Phyma");

  const path = require("./title.md");
  fetch(path)
    .then((response) => {
      return response.text();
    })
    .then((text) => setTitle(md.render(text)));

  return (
    <AppBar className={classes.header} position="relative">
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          spacing={2}
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item>
            <Typography edge="start" variant="h4">
              Phyma
            </Typography>
          </Grid>
          <Grid item>
            <Typography>数理のプラットフォームへようこそ</Typography>
          </Grid>
          <Grid item>
            <Typography>ログイン</Typography>
          </Grid>
        </Grid>
      </Toolbar>
      <Container maxWidth="sm">
        <Typography className={classes.eyeCatch}>
          <div dangerouslySetInnerHTML={{ __html: titleText }}></div>
        </Typography>
      </Container>
    </AppBar>
  );
}

export default function Index() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Phyma";
  });

  return (
    <div className={classes.root}>
      <ProminentBar />
      <MainTypo />
      <Container maxWidth="xl">
        <Typography>フッターを書く</Typography>
      </Container>
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
