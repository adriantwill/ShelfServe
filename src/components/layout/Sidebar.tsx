import { FaList } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import SidebarButton from "./SidebarButton";
import { LuChefHat } from "react-icons/lu";

export default function ComponentName() {
  return (
    <div className="bg-blue-500 flex-row p-6 flex-4 h-screen w-9 rounded-r-lg">
      <div className=" flex items-center gap-4">
        <img src={logo} className="size-10"></img>
        <h1 className="text-white text-4xl font-bold">Shelf Selve</h1>
      </div>
      <div className="mt-10 mb-3 px-4 text-gray-400">Main Menu</div>
      <SidebarButton icon={FaList} children={"Dashboard"}></SidebarButton>
      <SidebarButton icon={LuChefHat} children={"Recipe"}></SidebarButton>
    </div>
  );
}
