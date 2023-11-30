import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";

const NestedObject = () => {
  const nestedObj = {
    Console: "ICD data successfully predicted",
    Result: {
      "cellulitis of external ear": {
        "H60.11": {
          status: "billable",
          description: "Cellulitis of right external ear",
        },
        "H60.12": {
          status: "billable",
          description: "Cellulitis of left external ear",
        },
        "H05.01": {
          status: "non-billable",
          description: "Cellulitis of orbit",
        },
        "E08.62": {
          status: "non-billable",
          description:
            "Diabetes mellitus due to underlying condition with skin complications",
        },
        "H90.2": {
          status: "billable",
          description: "Conductive hearing loss, unspecified",
        },
      },
      "infantile acute idiopathic pulmonary hemorrhage": {
        "J84.84": {
          status: "non-billable",
          description: "Other interstitial lung diseases of childhood",
        },
        "M41.04": {
          status: "billable",
          description: "Infantile idiopathic scoliosis, thoracic region",
        },
        "V16.1X": {
          status: "non-billable",
          description: "Description Unavailable",
        },
        "R04.81": {
          status: "billable",
          description: "Acute idiopathic pulmonary hemorrhage in infants",
        },
        "M41.05": {
          status: "billable",
          description: "Infantile idiopathic scoliosis, thoracolumbar region",
        },
      },
      "coronary heart disease": {
        "I25.2": {
          status: "billable",
          description: "Old myocardial infarction",
        },
        "I25.41": {
          status: "billable",
          description: "Coronary artery aneurysm",
        },
        "B57.1": {
          status: "billable",
          description: "Acute Chagas' disease without heart involvement",
        },
        "I24.9": {
          status: "billable",
          description: "Acute ischemic heart disease, unspecified",
        },
        "I11.0": {
          status: "billable",
          description: "Hypertensive heart disease with heart failure",
        },
      },
    },
    Error_Flag: false,
    Error_UI: "",
    Error_DS: "",
  };

  //checkbox in table row
  const [tableRowData, setTableRowData] = useState({
    list: [],
    object: {},
  });
  const handleChange = (e, key, data) => {
    console.log(e.target.checked);
    console.log("disease name-->", key);
    console.log("ICD codes-->", data[0]);
    console.log("Status and Description -->", data[1]);

    if (e.target.checked) {
      console.log(tableRowData?.object[data[0]]);

      if (!tableRowData?.object[data[0]]) {
        setTableRowData({
          list: [...tableRowData?.list, data[0]],
          object: {
            ...tableRowData?.object,
            [data[0]]: [key, data[0], data[1]],
          },
        });
        console.log("tableRowData.object -->", tableRowData?.object);
      }
    } else {
      //unchecked
      if (tableRowData?.list?.indexOf(data[0]) > -1) {
        let val = tableRowData;
        console.log(val);

        delete val?.object[data[0]];
        val?.list.splice(val?.list?.indexOf(data[0]), 1);

        setTableRowData({
          list: [...val?.list],
          object: { ...val?.object },
        });
      }
    }
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="column"
        rowGap={2}
        p={1}
      >
        <Grid item xs={12}>
          {" "}
          <h3> Nested Object </h3>{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <TableContainer component={Paper}>
            <StyledTable>
              <TableHead>
                <TableHeading>
                  <Cell> Name of the Disease </Cell>
                  <Cell> ICD 10 Code </Cell>
                  <Cell> Status </Cell>
                  <Cell> Description </Cell>
                  <Cell>Select Code</Cell>
                </TableHeading>
              </TableHead>
              <TableBody>
                {Object.keys(nestedObj.Result).map((key, index) => (
                  <TableRow>
                    <TableCell style={{}}> {key} </TableCell>
                    <TableCell colSpan={4}>
                      {Object.entries(nestedObj.Result[key]).map((data) => (
                        <TableRow>
                          <TableCell>{data[0]} </TableCell>
                          <TableCell> {data[1].status} </TableCell>
                          <TableCell style={{ maxWidth: "300px" }}>
                            {" "}
                            {data[1].description}{" "}
                          </TableCell>
                          <TableCell>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="large"
                                  checked={
                                    tableRowData?.list?.indexOf(data[0]) > -1
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => handleChange(e, key, data)}
                                />
                              }
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container spacing={2} p={2} direction="row">
        <Grid style={{ border: "2px solid black " }} item xs={12} sm={6} md={6}>
          <h3> tableRowData list </h3>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  {Object.entries(tableRowData?.list).map((item) => (
                    <TableCell>
                      <strong>Index {item[0]}: </strong> {item[1]}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid style={{ border: "2px solid black " }} item xs={12} sm={6} md={6}>
          <h3>Selected Rows : tableRowData object</h3>
          <TableContainer component={Paper}>
            <StyledTable>
              <TableHead>
                <TableHeading>
                  <Cell>Name of disease</Cell>
                  <Cell>ICD Codes</Cell>
                  <Cell>Status</Cell>
                  <Cell>Description</Cell>
                </TableHeading>
              </TableHead>
              <TableBody>
                {Object.values(tableRowData?.object)?.map((item) => (
                  <TableRow>
                    <TableCell>{item[0]}</TableCell>
                    <TableCell>{item[1]}</TableCell>
                    <TableCell>{item[2].status}</TableCell>
                    <TableCell>{item[2].description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default NestedObject;

const StyledTable = styled(Table)`
  border: 1px solid #023047;
`;

const TableHeading = styled(TableRow)`
  background: #023047;
`;

const Cell = styled(TableCell)`
  &.css-1ygcj2i-MuiTableCell-root {
    color: antiquewhite;
  }
`;
