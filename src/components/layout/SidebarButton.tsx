import type { IconType } from "react-icons";

interface SidebarButtonProps {
  children: string;
  onClick?: () => void;
  icon?: IconType;
}

export default function SidebarButton({
  children,
  onClick,
  icon: Icon,
}: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-2xl text-text-muted hover:text-text-inverse hover:bg-primary-hover/30 rounded-lg px-4 py-2 transition-all duration-200 flex items-center gap-3 w-full my-2 "
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </button>
  );
}
