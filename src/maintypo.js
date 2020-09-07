import React, { useState } from "react";

import { Paper, Container } from "@material-ui/core";
import MarkdownIt from "markdown-it";
import mk from "markdown-it-katex";

const md = new MarkdownIt();
md.use(mk);

export default function MainTypo(props) {
  const [mainText, setText] = useState(
    md.render(`# Math Rulez! \n GO GO GO $\\sqrt{3x-1}+(1+x)^2$`)
  );

  // https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component

  const path = require("./noether's_theorem.md");
  fetch(path)
    .then((response) => {
      return response.text();
    })
    .then((text) => setText(md.render(text)));

  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: mainText }}></div>
    </Container>
  );
}
