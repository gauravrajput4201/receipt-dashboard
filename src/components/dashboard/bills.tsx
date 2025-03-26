import React from "react";
import Bills from "../../assets/bills.svg";

interface BillProps {
  id: number;
  name: string;
  date: string;
  price: string;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const BillItem: React.FC<BillProps> = ({
  id,
  name,
  date,
  price,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`flex items-center gap-4 p-2 border-b last:border-0 cursor-pointer transition`}
    >
      <div>
        <Bills />
      </div>
      <div className="flex flex-col">
        <p
          className={`font-semibold text-sm  ${
            isSelected ? "text-[#603AE5]" : "text-black"
          }`}
        >
          {name}
        </p>
        <p className="text-[#8181A5] text-xs">Date: {date}</p>
        <p className="text-[#8181A5] font-medium text-xs">{price}</p>
      </div>
    </div>
  );
};

export default BillItem;
