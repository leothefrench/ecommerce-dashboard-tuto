'use client';

import { AnalyticsCard } from './AnalyticsCard';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { DataTable } from '../ui/data-table';

type TopCustomersProps = {
  data: Customers[];
}

export type Customers = {
  id: string;
  name: string;
  email: string;
  orders: number;
  image: string;
};

export const TopCustomersColumns: ColumnDef<Customers>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'orders',
    header: 'Orders',
  },
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }) => {
      const imageUrl = row.getValue('image') as string;
      console.log('Image URL:', imageUrl); // Log de l'URL de l'image

      return (
        <Image
          src={imageUrl}
          width={50}
          height={50}
          alt={`Product Image`}
          className="border-2 border-primary"
        />
      );
    },
  },
];
export const TopCustomers = ({data}: TopCustomersProps) => {

  return (
    <AnalyticsCard title="Top Customers" subTitle="Showing Top Customers">
      <DataTable
        columns={TopCustomersColumns}
        data={data}
      />
    </AnalyticsCard>
  );
};
