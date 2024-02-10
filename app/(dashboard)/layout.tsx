import type { PropsWithChildren } from "react";

import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-full">
      <Sidebar />

      <div className="pl-[60px] h-full">{children}</div>
    </main>
  );
};

export default DashboardLayout;
