import { Grid, Button } from "@mui/material";
import React, { useState } from "react";
import jsPDF from "jspdf";

const DownloadPdf = () => {
  const handleGeneratePdf = () => {
    const doc = new jsPDF("p", "pt", "a4");

    const pdfContent = document.getElementById("download");

    doc.html(pdfContent, {
      callback: (pdf) => {
       // pdf.save("sample.pdf");
        doc.save("sample.pdf");
      },
      margin: [40, 30, 40, 30],
    });
  };

  return (
    <>
      

      <Grid container direction="column" spacing={2}>
        <Grid item>
          {" "}
          <div id="download">
          <h1>Download Pdf using jsPDF</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              necessitatibus!
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              doloribus cumque provident consequatur in iusto est ipsam? Ratione
              consequuntur quam, impedit rerum culpa cum excepturi sit rem enim
              ipsa autem itaque ipsum pariatur suscipit asperiores, eos ex iure
              incidunt est sunt inventore illum quos? Saepe quasi mollitia
              similique vero iure autem. Quidem consectetur ducimus, vel id quia
              reprehenderit, laudantium voluptas sapiente odio sed a!
              Repellendus alias omnis reiciendis laudantium sunt recusandae
              provident rem. Dolor excepturi veritatis consequuntur! Vel esse
              consectetur vitae nemo blanditiis obcaecati accusamus expedita,
              totam laborum perferendis iste eveniet asperiores. Eligendi nam
              dicta ab quo voluptates sint blanditiis.{" "}
            </p>
          </div>{" "}
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleGeneratePdf}>
            {" "}
            Download{" "}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DownloadPdf;
