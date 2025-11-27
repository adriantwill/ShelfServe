import logo from "../../assets/logo.png";

export default function ComponentName() {
  return (
    <div className="bg-blue-500 flex-row p-6 flex-4 h-screen w-9 rounded-r-lg">
      <div className="flex items-center gap-4">
        <img src={logo} className="size-10"></img>
        <h1 className="text-white text-4xl font-bold">Shelf Selve</h1>
      </div>
      <div className="items-end">Main Menu</div>
    </div>
  );
}
