import React, {useEffect} from "react";
import EmployeesComponent from "./Employees.component";
import { useLocation } from "react-router-dom";
import {getWeeksPDF} from '../../client/api';

const Employees = (props) => {
  const location = useLocation([]);
  const {employees} = location.state;
  useEffect(() => {
    getPDF();
  },[]);

  const getPDF = async() => {
    const response = await getWeeksPDF({curp: 'AUGE900226MDFBLS02', ssn: '30099022847'});
    console.log("Response: ", response);
  }

  console.log("Employees: ", employees);

  return <EmployeesComponent rows={employees}/>
};

export default Employees;