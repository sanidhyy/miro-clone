import { auth } from "@clerk/nextjs/server";

import { BoardList } from "./_components/board-list";
import { EmptyOrg } from "./_components/empty-org";

type DashboardPageProps = {
  searchParams: Promise<{
    search?: string;
    favourites?: string;
  }>;
};

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const { orgId } = await auth();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!orgId ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={orgId} query={await searchParams} />
      )}
    </div>
  );
};

export default DashboardPage;
