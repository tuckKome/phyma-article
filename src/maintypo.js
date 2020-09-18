import React, { useState } from "react";

import { Paper, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MarkdownIt from "markdown-it";
import mk from "markdown-it-katex";

const md = new MarkdownIt();
md.use(mk);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "left",
    // color: theme.palette.text.secondary,
  },
}));

export default function MainTypo(props) {
  const [mainText, setText] = useState(
    md.render(`# Math Rulez! \n GO GO GO $\\sqrt{3x-1}+(1+x)^2$`)
  );
  const classes = useStyles();

  // https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component

  const path = require("./noether's_theorem.md");
  fetch(path)
    .then((response) => {
      return response.text();
    })
    .then((text) => setText(md.render(text)));

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={1}></Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
            <div dangerouslySetInnerHTML={{ __html: mainText }}></div>
          </Paper>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
}
