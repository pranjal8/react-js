import React, { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";
import { Button, Grid } from "@mui/material";
import copy from "copy-to-clipboard";
import jsPDF from "jspdf";
import styled from "styled-components";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnisipsam rem possimus quod deserunt suscipit vero iure et cum illo animi voluptatum cupiditate hic, natus accusamus saepe, consequatur similique! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequiet fugiat iste, cum necessitatibus ad commodi quia ut! Eos!"
  );
  const [isCopied, setIsCopied] = useState("");

  /////////////////////////////////////////

  const handlePdfDownload = (e) => {
    e.preventDefault();
    let element = document.getElementsByClassName("jodit-wysiwyg");
    console.log("array of element--->", element);

    element[0].setAttribute("id", "pdf-download");

    let doc = new jsPDF("p", "pt", "a4");

    doc.html(document.getElementById("pdf-download"), {
      html2canvas: { scale: 0.43 },
      callback: (pdf) => {
        doc.save(`report_${new Date().toLocaleString()}`); //
      },
      margin: [40, 30, 40, 30],
    });
  };

  /////////////////////////////////////
  const handleCopyText = (text) => {
    copy(text, {
      format: "text/html",
    });
    setIsCopied(true);
  };

  return (
    <>
      <h1> Text Editor using jodit </h1>

      <Grid container spacing={2} direction="row">
        <Grid item>
          {" "}
          {/* <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
          /> */}
          <StyledJoditcontainer
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
          />
        </Grid>
        <Grid item xs={6}>
          {" "}
          <Button variant="outlined" onClick={handlePdfDownload}>
            {" "}
            Download text
          </Button>{" "}
        </Grid>
        <Grid item xs={6}>
          {" "}
          {isCopied ? (
            <>
              <Button variant="outlined"> Copied</Button>{" "}
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={() => handleCopyText(content)}
              >
                {" "}
                Copy Text{" "}
              </Button>{" "}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default TextEditor;

const StyledJoditcontainer = styled(JoditEditor)`
  .jodit-wysiwyg {
    font-size: larger;
    font-style: bold;
    border: 1px solid black;
    color: blue;
  }
`;
