import React, { useState } from "react";
import Supervisor from "../subpages/AddnewSupervisor/Supervisor";
import List from "../subpages/ListofSupervisors/List";
const AddSupervisor = () => {
  const [page, setPage] = useState(0);
  console.log(page);

  const components = [
    <List setPage={setPage} />,
    <Supervisor setPage={setPage} />,
  ];

  return <>{components[page]}</>;
};

export default AddSupervisor;
