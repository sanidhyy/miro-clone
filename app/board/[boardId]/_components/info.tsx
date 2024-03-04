export const Info = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      TODO: Information about the board.
    </div>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <div
      className="w-[300px] absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md"
      aria-hidden
    />
  );
};
