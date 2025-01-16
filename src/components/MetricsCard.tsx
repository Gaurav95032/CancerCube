import React from "react";
import { IconChevronRight } from "@tabler/icons-react";

const MetricsCard = ({
  title,
  subtitle,
  value,
  icon: Icon,
  progress,
  onClick,
}) => (
  <div className="flex flex-col rounded-xl border bg-gray-800 shadow-sm border-gray-700">
    <div className="flex justify-between gap-x-3 p-4 md:p-5">
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-400">
          {title}
        </p>
        <div className="mt-1 flex items-center gap-x-2">
          <h3 className="text-xl font-medium text-white sm:text-2xl">
            {value}
          </h3>
        </div>
      </div>
      <div className="flex size-[46px] h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 text-white">
        <Icon size={25} className="text-blue-400" />
      </div>
    </div>
    <a
      className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-700 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 md:px-5"
      href="#"
      onClick={onClick}
    >
      {subtitle}
      <IconChevronRight />
    </a>
  </div> 
);

export default MetricsCard;

