import { BarGraph } from "@/components/dashboard/BarChart";
import { HorizontalGraph } from "@/components/dashboard/HorizontalBarChart";
import { PieGraph } from "@/components/dashboard/PieChart";
import { RadarGraph } from "@/components/dashboard/RadarChart";
import { Summary } from "@/components/dashboard/Summary";
import { TopCustomers } from "@/components/dashboard/TopCustomers";
import { TopProducts } from "@/components/dashboard/TopProducts";

export default function Home() {
  return (
    <div className="p-4 gap-5 grid">
      <Summary />
      <div className="grid lg:grid-cols-2 gap-10">
        <BarGraph />
        <RadarGraph />
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <TopProducts />
        <PieGraph />
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <HorizontalGraph />
        <TopCustomers />
      </div>
    </div>
  );
}
