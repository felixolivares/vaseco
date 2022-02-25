import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


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
  '&:nth-of-type(odd)': {
    backgroundColor: "#fff",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const DashboardComponent = (props) => {
  const { rows, columns, isLoading } = props;
  return (
    <div className="dashboard__container">
      <div>
        <h1 className="dashboard__title">Dashboard</h1>
        <p className="dashboard__subtitle">Lista de proveedores</p>
      </div>
      <div className="dashboard__table-providers">
        {isLoading ? (
          <div className="dashboard__spinner">
            <CircularProgress />
          </div>
        ):(
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell>Estatus</StyledTableCell>
                  <StyledTableCell>Resultados</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.providerID}
                    </StyledTableCell>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell><Link to={`/employees`} state={{ employees: row.employees }}><Button variant="contained">Empleados</Button></Link></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
        }
      </div>
    </div>
  );
};

export default DashboardComponent;
