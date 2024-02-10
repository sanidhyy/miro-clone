import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Hello, World!</p>
      <UserButton></UserButton>
    </div>
  );
}
