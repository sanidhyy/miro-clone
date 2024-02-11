"use client";

import { EmptyFavourites } from "./empty-favourites";
import { EmptySearch } from "./empty-search";

type BoardListProps = {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
};

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // TODO: Change to API Call

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favourites) {
    return <EmptyFavourites />;
  }

  if (!data?.length) {
    return <div>No boards at all.</div>;
  }

  return <div className="">BoardList</div>;
};
