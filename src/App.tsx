import "./App.css";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <div className="flex w-screen">
        <Sidebar></Sidebar>
        <main className="flex-10 bg-gray-100 ">
          <h1>Main Content</h1>
          {/* Main content */}
        </main>
        {/* Secondary Section - Right */}
        <aside className="flex-5 bg-gray-200 ">
          <h2>Secondary</h2>
          {/* Secondary content */}
        </aside>
      </div>
    </>
  );
}

export default App;
