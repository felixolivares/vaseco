import React, {useState, useEffect} from "react";
import "./styles.css";
import DashboardComponent from "./Dashboard.component";
import {getAllProviders} from "../../client/store";

const Dashboard = (props) => {
  const [providers, setProviders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProviders();
  },[]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Proveedor", width: 130 },
    { field: "status", headerName: "Estatus de Carga", width: 200 },
  ];

  const getProviders = async() => {
    setIsLoading(true);
    let providersRetrieved = await getAllProviders();
    setProviders(providersRetrieved);
    console.log(providersRetrieved);
    setIsLoading(false);
  }
  return <DashboardComponent rows={providers} columns={columns} isLoading={isLoading}/>;
};

export default Dashboard;
