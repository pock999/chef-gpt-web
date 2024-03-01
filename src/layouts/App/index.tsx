import React, { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../loading";
import { Dashboard } from "../../components/ui/dashboard";

export default function AppLayout() {
  const [loading, setLoading] = useState(false);

  // TODO: get chat list

  if (loading) {
    return <Loading />;
  }

  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  );
}
