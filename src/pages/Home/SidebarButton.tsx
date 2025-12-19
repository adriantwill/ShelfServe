import type { IconType } from "react-icons";

interface SidebarButtonProps {
  children: string;
  icon?: IconType;
  isSelected: boolean;
  onClick: () => void;
}

export default function SidebarButton({
  children,
  icon: Icon,
  isSelected,
  onClick,
}: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer text-2xl text-text-inverse hover:bg-primary-hover/30 rounded-lg px-4 py-2 transition-all duration-200 flex items-center gap-3 w-full my-2 ${
        isSelected ? "opacity-100 bg-primary-hover/30" : "opacity-80"
      }`}
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </button>
  );
}
