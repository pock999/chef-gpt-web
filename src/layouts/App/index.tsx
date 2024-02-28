import React, { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading";
import { Dashboard } from "../../components/ui/Dashboard";

export default function AppLayout() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  );
}
