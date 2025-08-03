import React from "react";
import { IconType } from "react-icons";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title={"Dashboard"} />
      <Route Icon={FiUsers} selected={false} title={"Teams"} />
      <Route Icon={FiPaperclip} selected={false} title={"Invoice"} />
      <Route Icon={FiLink} selected={false} title={"Integrations"} />
      <Route Icon={FiDollarSign} selected={false} title={"Finance"} />
    </div>
  );
};
// 840g8, 1040G9
const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: String;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] 
    ${
      selected
        ? "bg-white text-stone-950 shadow"
        : "hover:bg-stone-200 bg-transparent text-stone-700 shadow-none"
    }`}
    >
      <Icon />
      <span>{title}</span>
    </button>
  );
};
