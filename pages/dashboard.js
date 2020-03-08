import React from "react";
import { GlobalStateContext } from "../context/global";

const DashboardPage = () => {
  const globalState = React.useContext(GlobalStateContext);

  return <div>{globalState.context.userData}</div>;
};

export default DashboardPage;
