import type { IconType } from "react-icons";

interface SidebarButtonProps {
  children: string;
  onClick?: () => void;
  icon?: IconType;
}

export default function SidebarButton({
  children,
  onClick,
  icon,
}: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-gray-400 hover:text-white hover:bg-blue-400/30 rounded-lg px-4 py-2 transition-all duration-200 flex items-center gap-3 w-full text-left"
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
