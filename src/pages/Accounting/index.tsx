import { Button } from "@/components/ui/button";
import { EasyUploadDialog } from "@/components/dashboard/upload";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import BillItem from "@/components/dashboard/bills";
import Invoice from "@/components/dashboard/invoice";
interface Bill {
  id: number;
  name: string;
  date: string;
  price: string;
}

const bills: Bill[] = [
  { id: 1, name: "Bill 1", date: "Nov 1, 2019", price: "£ 50.59" },
  { id: 2, name: "Bill 2", date: "Nov 1, 2019", price: "£ 75.20" },
  { id: 3, name: "Bill 3", date: "Nov 1, 2019", price: "£ 30.99" },
];
const DashboardPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("bills");
  const [selectedBillId, setSelectedBillId] = useState<number | null>(
    bills[0].id
  );

  const handleSelectBill = (id: number) => {
    setSelectedBillId(id);
  };

  return (
    <>
      <div className="min-h-screen bg-background p-5">
        <div className="flex justify-end mb-8  w-full">
          <Button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-[#603AE5] hover:bg-indigo-700 text-white py-4 px-4 rounded-lg text-sm cursor-pointer"
          >
            Add to Expenses Report
          </Button>
        </div>
        <div className="flex gap-3 items-start">
          <div className="basis-[32%] flex items-center space-x-6">
            <Tabs
              defaultValue={activeTab}
              onValueChange={setActiveTab}
              className="w-auto"
            >
              <TabsList className="bg-transparent  h-auto p-0">
                <TabsTrigger
                  value="alldocument"
                  className={cn(
                    "px-8 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  All Document
                </TabsTrigger>
                <TabsTrigger
                  value="bills"
                  className={cn(
                    "px-8 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  Bills
                </TabsTrigger>
                <TabsTrigger
                  value="receipts"
                  className={cn(
                    "px-8 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  Receipts
                </TabsTrigger>
              </TabsList>
              <TabsContent value="bills">
                <div className="border rounded-lg shadow-md bg-white">
                  {bills.map((bill: Bill) => (
                    <BillItem
                      key={bill.id}
                      id={bill.id}
                      name={bill.name}
                      date={bill.date}
                      price={bill.price}
                      isSelected={selectedBillId === bill.id}
                      onSelect={handleSelectBill}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="basis-[68%]  w-full rounded-xl border border-dashed p-4">
            <div className="w-full bg-[#F6DEBA] rounded-xl h-[880px] flex justify-center items-center">
              <Invoice id={selectedBillId} />
            </div>
          </div>
        </div>
        {/* <Button onClick={() => setIsOpen(true)}>Open EasyUpload</Button> */}
        <EasyUploadDialog open={isOpen} onOpenChange={setIsOpen} />
      </div>
    </>
  );
};

export default DashboardPage;
