import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";

type BoardIdPageProps = {
  params: {
    boardId: string;
  };
};

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<div>Loading...</div>}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
