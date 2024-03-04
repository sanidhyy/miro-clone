import { Canvas } from "./_components/canvas";

type BoardIdPageProps = {
    params: {
        boardId: string
    }
}

const BoardIdPage = ({params}: BoardIdPageProps) => {
  return (
      <Canvas boardId={params.boardId} />
  );
};

export default BoardIdPage;
