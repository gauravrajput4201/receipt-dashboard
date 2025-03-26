import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

import Logo from "../../assets/logo.svg";
import PaymentForm from "./payment-form";
import { ScrollArea } from "../ui/scroll-area";

export default function QuickbookInterface() {
  const [activeTab, setActiveTab] = useState("comment");

  return (
    <div className="w-[300px] min-h-screen h-dvh overflow-hi">
      <ScrollArea className="h-dvh">
        <div className=" bg-white rounded-lg shadow-sm p-4 space-y-4">
          <div className="flex items-start justify-between border rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2CA01C] flex items-center justify-center">
                <span className="h-6 w-6">
                  <Logo />
                </span>
              </div>
              <div>
                <h2 className="font-semibold text-sm">Quickbook</h2>
                <div className="text-xs text-[#8181A5]">
                  16 June, 2024
                  <br />
                  8:15 PM
                </div>
              </div>
            </div>
            <div className="text-right text-xs">
              <div className="text-[#8181A5] mb-2">Publishing...</div>
              <div className="text-[#8181A5]">Jimmy Jason</div>
            </div>
          </div>

          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id="auto-sync"
                defaultChecked
                className="data-[state=checked]:bg-[#603AE5] data-[state=checked]:text-white h-5 w-5"
              />
              <Label htmlFor="auto-sync" className="text-sm font-medium">
                Auto-sync
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="save-config"
                defaultChecked
                className="data-[state=checked]:bg-[#603AE5] data-[state=checked]:text-white h-5 w-5"
              />
              <Label htmlFor="save-config" className="text-sm font-medium">
                Save Config
              </Label>
            </div>
          </div>

          <Tabs
            defaultValue="comment"
            className="w-auto"
            onValueChange={setActiveTab}
          >
            <TabsList className="bg-transparent h-auto p-0 text-sm">
              <TabsTrigger
                value="comment"
                className="px-8 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-black text-sm"
              >
                Comment
              </TabsTrigger>
              <TabsTrigger
                value="query"
                className="px-8 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-black text-sm"
              >
                Query
              </TabsTrigger>
            </TabsList>

            <TabsContent value="comment" className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[#8181A5] text-sm">Type Comment</Label>
                <Textarea
                  placeholder="Start typing..."
                  className="min-h-[100px] border rounded-md p-2 w-full text-[#8181A5] resize-none"
                  rows={5}
                />
              </div>

              <Button
                variant="outline"
                className="w-full py-6 text-[#8181A5] bg-[#F6F6F6]"
              >
                Add Comment
              </Button>
            </TabsContent>

            <TabsContent value="query" className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[#8181A5] text-sm">Type Query</Label>
                <Textarea
                  placeholder="Enter your query here..."
                  className="min-h-[100px] border rounded-md p-2 w-full text-[#8181A5] resize-none"
                  rows={5}
                />
              </div>

              <Button variant="outline" className="w-full py-6 text-indigo-400">
                Submit Query
              </Button>
            </TabsContent>
          </Tabs>

          <Button className="w-full py-6 bg-[#603AE5] hover:bg-indigo-700 text-white">
            View Line Items
          </Button>

          {/* Pagination */}
          {/* <div className="flex items-center justify-between pt-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-gray-200 h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-[#8181A5]">Document Details</div>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-gray-200 h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div> */}
        </div>
        <PaymentForm />
      </ScrollArea>
    </div>
  );
}
