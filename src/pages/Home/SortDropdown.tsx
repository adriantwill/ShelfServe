import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface SortDropdownProps {
  onSortChange?: (sortOption: string) => void;
}

export default function SortDropdown({ onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Expiration Date");

  const sortOptions = [
    "Expiration Date",
    "Name (A-Z)",
    "Name (Z-A)",
    "Recently Added",
  ];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSortChange) {
      onSortChange(option);
    }
  };

  return (
    <div className="relative w-64">
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-surface border border-border rounded-lg flex items-center justify-between text-text-primary hover:bg-surface-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <span className="font-medium">Sort by: {selectedOption}</span>
        <FaChevronDown
          className={`text-text-secondary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-surface border border-border rounded-lg shadow-lg z-10 overflow-hidden">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-2 text-left text-sm transition-colors duration-150 ${
                selectedOption === option
                  ? "bg-accent text-text-inverse"
                  : "text-text-primary hover:bg-surface-hover"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
