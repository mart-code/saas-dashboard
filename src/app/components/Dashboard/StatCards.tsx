import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export const StatCards = () => {
  return (
    <>
      <Card
      title="Gross Revenue"
      value="5120,054.24"
      pillText="2.75%"
      trend="up"
      period="From Jan 1st - Jul 31st"
      />
      <Card
      title="Avg Order"
      value="$27.97"
      pillText="1.01%"
      trend="down"
      period="From Jan 1st - Jul 31st"
      />
      <Card
          title="Trailing Year"
      value="$278,053.24"
      pillText="60.01%"
      trend="up"
      period="From Jan 1st - Jul 31st" />
    </>
  );
};

const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
}: {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
}) => {
  return <div className="p-4 col-span-12 md:col-span-6 lg:col-span-4 rounded border border-stone-300">
<div className="flex mb-8 items-start justify-between">
    <div>
        <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold">{value}</p>
    </div>
    <span className={`text-xs flex items-center gap-1 py-1 font-medium px-2 rounded ${trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{trend === 'up' ? <FiTrendingUp/> : <FiTrendingDown/>}{pillText}</span>
</div>
<p className="text-xs text-stone-500 ">{period}</p>
  </div>;
};
