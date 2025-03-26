import { z } from "zod";

const paymentFormSchema = z.object({
  paymentStatus: z.enum(["paid", "unpaid"]),
  billNumber: z.string().min(1, "Bill number is required"),
  billDate: z.string().min(1, "Bill date is required"),
  paidAmount: z.string().optional(),
  paidDate: z.string().optional(),
  dueDate: z.string().min(1, "Due date is required"),

  paymentMode: z.string().min(1, "Payment mode is required"),
  currency: z.string().min(1, "Currency is required"),
  bankTransactionRef: z.string().optional(),
  totalAmount: z.string().min(1, "Total amount is required"),
  taxAmount: z.string().optional(),
  totalAmountGBP: z.string().optional(),
  taxAmountGBP: z.string().optional(),
  fxRate: z.string().optional(),

  lineItemType: z.enum(["single", "multiple"]),
  description: z.string().min(1, "Description is required"),
});

export default paymentFormSchema;
