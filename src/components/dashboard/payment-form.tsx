"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import paymentFormSchema from "@/validation-schema/PaymentSchema";
import { toast } from "sonner";

const paymentModes = ["Bank Transfer", "Credit Card", "Cash", "Cheque"];
const currencies = ["GBP", "USD", "EUR", "JPY", "AUD"];

type FormValues = z.infer<typeof paymentFormSchema>;

export default function PaymentForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);

  const form = useForm<FormValues>({
    resolver: zodResolver(paymentFormSchema),

    defaultValues: {
      paymentStatus: "paid",
      billNumber: "",
      billDate: "",
      paidAmount: "1900.00",
      paidDate: "",
      dueDate: "",
      paymentMode: "",
      currency: "",
      bankTransactionRef: "",
      totalAmount: "",
      taxAmount: "",
      totalAmountGBP: "",
      taxAmountGBP: "",
      fxRate: "",
      lineItemType: "single",
      description: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted with data:", data);
    toast.success(`Form submitted`);
  }

  const nextTab = () => {
    if (activeTab < 1) setActiveTab(activeTab + 1);
  };

  const prevTab = () => {
    if (activeTab > 0) setActiveTab(activeTab - 1);
  };

  return (
    <div className="w-full bg-white">
      <Card className="border-0 shadow-none">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-4 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTab}
              disabled={activeTab === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-lg font-medium">
              {activeTab === 0 ? "Payment Details" : "Payment Mode"}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTab}
              disabled={activeTab === 1}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* <ScrollArea className="h-[70vh]"> */}
              <div className="p-4 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Payment Details</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                    >
                      <ChevronUp
                        className={cn(
                          "h-5 w-5 transition-transform",
                          !isDetailsExpanded && "rotate-180"
                        )}
                      />
                    </Button>
                  </div>

                  {isDetailsExpanded && (
                    <>
                      <FormField
                        control={form.control}
                        name="paymentStatus"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex items-center space-x-6 "
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="paid"
                                    id="paid"
                                    className=""
                                  />
                                  <Label htmlFor="paid" className="font-medium">
                                    Paid
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="unpaid" id="unpaid" />
                                  <Label
                                    htmlFor="unpaid"
                                    className="font-medium"
                                  >
                                    Unpaid
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="billNumber"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-muted-foreground">
                              Bill Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Start Typing"
                                className={
                                  "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                                }
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="billDate"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-muted-foreground">
                              Bill Date
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                placeholder="Start Typing"
                                className={
                                  "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                                }
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="paidAmount"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-muted-foreground">
                              Paid Amount
                            </FormLabel>
                            <FormControl>
                              <div className="flex items-center">
                                <span className="mr-2">£</span>
                                <Input
                                  placeholder="Start Typing"
                                  className={
                                    "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                                  }
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="paidDate"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-muted-foreground">
                              Paid Date
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                placeholder="Start Typing"
                                className={
                                  "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                                }
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-muted-foreground">
                              Due Date
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                placeholder="Start Typing"
                                className={
                                  "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                                }
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </div>

                {/* Common fields that appear on both screens */}
                <div className="space-y-4 border-t pt-4">
                  <FormField
                    control={form.control}
                    name="paymentMode"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-muted-foreground">
                          Payment Mode
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className={
                                "border-0 border-b border-gray-200 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-primary px-0"
                              }
                            >
                              <SelectValue placeholder="Select Payment Mode" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {paymentModes.map((mode) => (
                              <SelectItem key={mode} value={mode}>
                                {mode}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-muted-foreground">
                          Currency
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className={
                                "border-0 border-b border-gray-200 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-primary px-0"
                              }
                            >
                              <SelectValue placeholder="Select Currency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {currencies.map((currency) => (
                              <SelectItem key={currency} value={currency}>
                                {currency}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bankTransactionRef"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-muted-foreground">
                          Bank Transaction Ref
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Start Typing"
                            className={
                              "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="totalAmount"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-muted-foreground">
                          Total Amount
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Start Typing"
                            className={
                              "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="taxAmount"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-muted-foreground">
                          Tax Amount
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Start Typing"
                            className={
                              "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="totalAmountGBP"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-muted-foreground">
                          Total Amount (GBP)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Start Typing"
                            className={
                              "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="taxAmountGBP"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-muted-foreground">
                          Tax Amount (GBP)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Start Typing"
                            className={
                              "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fxRate"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-muted-foreground">
                          FX Rate
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Start Typing"
                            className={
                              "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Description section */}
                <div className="space-y-4 border-t pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Description</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setIsDescriptionExpanded(!isDescriptionExpanded)
                      }
                    >
                      <ChevronUp
                        className={cn(
                          "h-5 w-5 transition-transform",
                          !isDescriptionExpanded && "rotate-180"
                        )}
                      />
                    </Button>
                  </div>

                  {isDescriptionExpanded && (
                    <>
                      <FormField
                        control={form.control}
                        name="lineItemType"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-muted-foreground">
                              Line Item
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex items-center space-x-6"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="single"
                                    id="single"
                                    className=""
                                  />
                                  <Label
                                    htmlFor="single"
                                    className="font-medium"
                                  >
                                    Single
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="multiple"
                                    id="multiple"
                                  />
                                  <Label
                                    htmlFor="multiple"
                                    className="font-medium"
                                  >
                                    Multiple
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-muted-foreground">
                              Description
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Description"
                                className={
                                  "border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                                }
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </div>
              </div>
              {/* </ScrollArea> */}

              <div className="flex justify-center items-center py-4 space-x-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    activeTab === 0 ? "bg-primary" : "bg-gray-300"
                  } cursor-pointer`}
                  onClick={() => setActiveTab(0)}
                />
                <div
                  className={`h-2 w-2 rounded-full ${
                    activeTab === 1 ? "bg-primary" : "bg-gray-300"
                  } cursor-pointer`}
                  onClick={() => setActiveTab(1)}
                />
              </div>

              <div className="p-4 space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full text-[#8181A5] bg-[#F6F6F6] hover:bg-purple-100"
                  onClick={() => console.log("Save clicked", form.getValues())}
                >
                  Save
                </Button>

                <Button
                  type="submit"
                  className="w-full bg-[#603AE5] hover:bg-indigo-700 text-white"
                >
                  Publish
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
