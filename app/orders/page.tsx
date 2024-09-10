import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { ordersDummyData } from "@/constants/data";

export default async function page() {
  return (
    <AnalyticsCard title="Products" subTitle="Showing All Products">
      <Button className="mb-3">Create New Order</Button>
      <DataTable columns={columns} data={ordersDummyData} />
    </AnalyticsCard>
  );
}