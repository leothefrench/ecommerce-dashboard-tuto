import { BarGraph } from "@/components/dashboard/BarChart";
import { HorizontalGraph } from "@/components/dashboard/HorizontalBarChart";
import { PieGraph } from "@/components/dashboard/PieChart";
import { RadarGraph } from "@/components/dashboard/RadarChart";
import { Summary } from "@/components/dashboard/Summary";
import { Customers, TopCustomers } from "@/components/dashboard/TopCustomers";
import { TopProducts } from "@/components/dashboard/TopProducts";

async function getCustomers():Promise<Customers[]> {
  const res = await fetch("https://66deb303de4426916ee207f9.mockapi.io/customers", {cache: "no-store"})

  const data =  await res.json()
  return data
}

export default async function Home() {
  const data = await getCustomers()

  const topCustomers = data
    .sort((a, b) => b.orders - a.orders).slice(0,4)

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
        <TopCustomers data={topCustomers} />
      </div>
    </div>
  );
}
