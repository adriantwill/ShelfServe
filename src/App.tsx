import "./App.css";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <div className="flex w-screen">
        <Sidebar></Sidebar>
        <main className="flex-10 bg-gray-100 p-5">
          <h1 className="text-5xl font-semibold">Good Morning Adrian</h1>
          <input
            type="text"
            placeholder="Search"
            className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
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
