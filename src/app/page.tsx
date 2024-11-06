import TikTokDashboard from "@/components/TikTokDashboard";
import { TopPerformingContent } from "@/components/TopPerformingContent";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <TikTokDashboard />
    <TopPerformingContent />

  </main>
  );
}
