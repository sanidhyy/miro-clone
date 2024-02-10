import type { PropsWithChildren } from "react";

import { Navbar } from "./_components/navbar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-full">
      <Sidebar />

      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />

            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
