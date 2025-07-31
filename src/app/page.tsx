import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className="grid grid-cols-[220px_1fr]  gap-4 p-4 ">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
