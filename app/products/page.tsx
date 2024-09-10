import { AnalyticsCard } from '@/components/dashboard/AnalyticsCard';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';
import { ordersDummyData, ProductsDummyData } from '@/constants/data';

export default async function page() {
  return (
    <div className="p-6">
      <AnalyticsCard title="Products" subTitle="Showing All Products">
        <Button className="mb-3">Create New Product</Button>
        <DataTable columns={columns} data={ProductsDummyData} />
      </AnalyticsCard>
    </div>
  );
}
