import { useState } from "react";

interface ListItemProps {
  itemName: string;
  expirationDate: string;
  imageUrl: string;
  onCheckboxChange?: (checked: boolean) => void;
}

export default function ListItem({
  itemName,
  expirationDate,
  imageUrl,
  onCheckboxChange,
}: ListItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onCheckboxChange) {
      onCheckboxChange(newChecked);
    }
  };

  return (
    <div className="flex items-center justify-between bg-surface rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Left side: Image and text */}
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={itemName}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-text-primary">
            {itemName}
          </span>
          <span className="text-sm text-text-secondary">{expirationDate}</span>
        </div>
      </div>

      {/* Right side: Checkbox */}
      <button
        onClick={handleCheckboxClick}
        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
          isChecked
            ? "bg-accent border-accent"
            : "bg-surface border-border hover:border-primary-hover"
        }`}
      >
        {isChecked && (
          <svg
            className="w-4 h-4 text-text-inverse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
