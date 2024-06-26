import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function Customers() {
  const customers = await getData("customers");

  return (
    <div>
      {/* Header */}
      {/* <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupon"
      /> */}

      <div className="py-8">      
          <DataTable data={customers} columns={columns} />         
      </div>
    </div>
  );
}
