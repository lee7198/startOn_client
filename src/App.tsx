import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ContextInterface } from ".";

export default function App() {
  const [state, setState] = useState<ContextInterface>();
  return <Outlet context={{ state, setState }} />;
}
