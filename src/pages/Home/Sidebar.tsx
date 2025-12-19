import { useState } from "react";
import { FaList } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import SidebarButton from "./SidebarButton";
import { LuChefHat } from "react-icons/lu";

export default function ComponentName() {
  const [selectedButton, setSelectedButton] = useState<string | null>(
    "Dashboard",
  );

  return (
    <div className="bg-primary p-6 flex-4 h-screen w-9 rounded-r-lg">
      <div className=" flex items-center gap-4">
        <img src={logo} className="size-10"></img>
        <h1 className="text-text-inverse text-4xl font-bold">Shelf Selve</h1>
      </div>
      <div className="mt-10 mb-3 px-4 text-text-muted">Main Menu</div>
      <SidebarButton
        icon={FaList}
        isSelected={selectedButton === "Dashboard"}
        onClick={() => setSelectedButton("Dashboard")}
      >
        Dashboard
      </SidebarButton>
      <SidebarButton
        icon={LuChefHat}
        isSelected={selectedButton === "Recipe"}
        onClick={() => setSelectedButton("Recipe")}
      >
        Recipe
      </SidebarButton>
    </div>
  );
}
