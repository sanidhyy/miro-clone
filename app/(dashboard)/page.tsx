import { auth } from "@clerk/nextjs";

import { BoardList } from "./_components/board-list";
import { EmptyOrg } from "./_components/empty-org";

type DashboardPageProps = {
  searchParams: {
    search?: string;
    favourites?: string;
  };
};

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { orgId } = auth();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!orgId ? <EmptyOrg /> : <BoardList orgId={orgId} query={searchParams} />}
    </div>
  );
};

export default DashboardPage;
