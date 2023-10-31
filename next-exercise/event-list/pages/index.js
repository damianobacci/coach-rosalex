import { getFeaturedEvents } from "@/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <h1>HomePage</h1>
    </>
  );
}
