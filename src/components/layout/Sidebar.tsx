import logo from "../../assets/logo.png";
import SidebarButton from "./SidebarButton";
import { FaBeer } from "react-icons/fa";

export default function ComponentName() {
  return (
    <div className="bg-blue-500 flex-row p-6 flex-4 h-screen w-9 rounded-r-lg">
      <div className="mb-10 flex items-center gap-4">
        <img src={logo} className="size-10"></img>
        <h1 className="text-white text-4xl font-bold">Shelf Selve</h1>
      </div>
      <div className="text-gray-300">Main Menu</div>
      <SidebarButton icon={FaBeer} children={"Dashboard"}></SidebarButton>
    </div>
  );
}
