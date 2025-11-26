import "./App.css";
import Sidebar from "./components/layout/sidebar";

function App() {
  return (
    <>
      <div className="flex h-full w-full">
        {/* Sidebar - Left */}
        <Sidebar></Sidebar>

        {/* Main Section - Middle */}
        <main className="flex-4 bg-gray-100 ">
          <h1>Main Content</h1>
          {/* Main content */}
        </main>

        {/* Secondary Section - Right */}
        <aside className="flex-2 bg-gray-200 ">
          <h2>Secondary</h2>
          {/* Secondary content */}
        </aside>
      </div>
    </>
  );
}

export default App;
