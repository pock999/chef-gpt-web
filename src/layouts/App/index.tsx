import React, { ReactNode, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../loading";
import { Dashboard } from "../../components/ui/dashboard";
import { useConversationStore } from "../../store";

export default function AppLayout() {
  const [loading, setLoading] = useState(true);

  const { fetchConversationList } = useConversationStore((state) => ({
    fetchConversationList: state.fetchConversationList,
  }));

  useEffect(() => {
    fetchConversationList(true)
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  );
}
