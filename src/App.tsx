import "./App.css";
import ListItem from "./components/layout/ListItem";
import Sidebar from "./components/layout/Sidebar";
import TestImage from "./assets/testItem.png";
function App() {
  return (
    <>
      <div className="flex w-screen dark:bg-gray-500">
        <Sidebar></Sidebar>
        <main className="flex-10 p-5 border-r border-divider ">
          <h1 className="text-5xl font-semibold">Good Morning Adrian</h1>
          <input
            type="text"
            placeholder="Search"
            className="my-6 px-4 py-2 bg-input text-text-primary rounded-lg placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent w-full focus:bg-input-focus transition-all duration-100 ease-in-out"
          />
          <div className="flex flex-col gap-4">
            <ListItem
              itemName="Milk"
              expirationDate="Expires: Dec 5, 2025"
              imageUrl={TestImage}
              onCheckboxChange={(checked) => console.log(checked)}
            />
            <ListItem
              itemName="Milk"
              expirationDate="Expires: Dec 5, 2025"
              imageUrl={TestImage}
              onCheckboxChange={(checked) => console.log(checked)}
            />
          </div>
        </main>
        {/* Secondary Section - Right */}
        <aside className="flex-5 ">
          <h2>Secondary</h2>
          {/* Secondary content */}
        </aside>
      </div>
    </>
  );
}

export default App;
