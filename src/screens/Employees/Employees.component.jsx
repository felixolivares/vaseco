import React from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import { Document, Page } from "react-pdf";
import Button from "@mui/material/Button";

import "@react-pdf-viewer/core/lib/styles/index.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f5f8fd",
    color: "#505887",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const EmployeesComponent = (props) => {
  console.log(props);
  const { rows, url, base64, pageNumber, numPages, onDocumentLoadSuccess } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="dashboard__container">
      <div>
        <h1 className="dashboard__title">Dashboard</h1>
        <p className="dashboard__subtitle">Lista de Empleados</p>
      </div>
      <div className="dashboard__table-providers">
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No</StyledTableCell>
                    <StyledTableCell>Empleado</StyledTableCell>
                    <StyledTableCell>CURP</StyledTableCell>
                    <StyledTableCell>Vigencia</StyledTableCell>
                    <StyledTableCell>Evidencia</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {(page + 1) * 10 - 10 + idx + 1}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">{`${row.name} ${row.paternalLastname} ${row.maternalLastname}`}</StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.curp}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        ${row.validity}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Link to={`/viewer`} state={{ ssn: row.ssn, curp: row.curp }}>
                          <Button variant="contained">PDF</Button>
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10]}
              component="div"
              count={rows.items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default EmployeesComponent;
