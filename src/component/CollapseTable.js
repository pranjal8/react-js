import {
  Box,
  Collapse,
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { data } from "../data/info";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const CollapseTable = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      <h3>CollapseTable</h3>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Collapse?</TableCell>
              <TableCell>Index</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data, index) => (
              <>
                <TableRow>
                  <TableCell>
                    <IconButton
                      onClick={() => setOpen(open === index ? -1 : index)}
                    >
                      {open === index ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell> {index} </TableCell>
                  <TableCell> {data.name} </TableCell>
                  <TableCell> {data.phone} </TableCell>
                  <TableCell> {data.email} </TableCell>
                  <TableCell> {data.country} </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> 
                    <Collapse in={open === index} timeout='auto' unmountOnExit >
                      <p>
                        It's me! index: {index}
                      </p>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CollapseTable;
