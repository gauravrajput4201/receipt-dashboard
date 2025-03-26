import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  documentOwner: z.string().min(1, "Document owner is required"),
  client: z.string().min(1, "Client selection is required"),
  file: z.instanceof(File, { message: "File is required" }),
});

type FormData = z.infer<typeof formSchema>;

interface EasyUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EasyUploadDialog: React.FC<EasyUploadDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [activeTab, setActiveTab] = useState("receipts");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"];

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentOwner: "Accountant 01",
      client: "",
      file: undefined,
    },
  });

  const selectedFile = watch("file");
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setValue("file", acceptedFiles[0], { shouldValidate: true });
      }
    },
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
      "text/csv": [".csv"],
    },
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);

    toast.success(`${text} has been copied to clipboard`);
  };

  const onSubmit = (data: FormData) => {
    toast.success("Your receipt has been uploaded");
    console.log("Form submitted:", data);

    reset();
    onOpenChange(false);
  };
  // const Receipts = () => {
  //   return (
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <div className="grid grid-cols-2 gap-8 mb-8">
  //         <div>
  //           <p className="text-gray-500 mb-2">Document Owner</p>
  //           <div className="relative">
  //             <Input
  //               {...register("documentOwner")}
  //               className={cn(
  //                 "border-0 border-b p-0 rounded-none text-black font-medium text-lg focus-visible:ring-0 focus-visible:ring-offset-0",
  //                 errors.documentOwner ? "border-red-500" : "border-gray-200"
  //               )}
  //               placeholder="Enter document owner"
  //             />
  //             {errors.documentOwner && (
  //               <p className="text-red-500 text-sm mt-1">
  //                 {errors.documentOwner.message}
  //               </p>
  //             )}
  //           </div>
  //         </div>

  //         <div>
  //           <p className="text-gray-500 mb-2">Client</p>
  //           <div className="relative">
  //             <Controller
  //               name="client"
  //               control={control}
  //               render={({ field }) => (
  //                 <Select onValueChange={field.onChange} value={field.value}>
  //                   <SelectTrigger
  //                     className={cn(
  //                       "border-0 border-b rounded-none px-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full",
  //                       errors.client ? "border-red-500" : "border-gray-200"
  //                     )}
  //                   >
  //                     <SelectValue
  //                       placeholder="Select Client"
  //                       className="text-gray-400"
  //                     />
  //                   </SelectTrigger>
  //                   <SelectContent>
  //                     {clients.map((client) => (
  //                       <SelectItem key={client} value={client}>
  //                         {client}
  //                       </SelectItem>
  //                     ))}
  //                   </SelectContent>
  //                 </Select>
  //               )}
  //             />
  //             {errors.client && (
  //               <p className="text-red-500 text-sm mt-1">
  //                 {errors.client.message}
  //               </p>
  //             )}
  //           </div>
  //         </div>
  //       </div>

  //       <div
  //         {...getRootProps()}
  //         className={cn(
  //           "border border-dashed rounded-lg p-10 mb-8 flex gap-3  items-center justify-center cursor-pointer",
  //           isDragActive
  //             ? "border-indigo-600 bg-indigo-50"
  //             : errors.file
  //             ? "border-red-500"
  //             : "border-gray-300"
  //         )}
  //       >
  //         <Input
  //           {...getInputProps()}
  //           className="h-full w-full z-50 bg-red-400"
  //         />
  //         <div className="bg-gray-100 p-5 rounded-lg mb-4">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-8 w-8 text-[#603AE5]"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  //             />
  //           </svg>
  //         </div>
  //         <div>
  //           <div className="text-[#603AE5] text-sm font-medium mb-2">
  //             {selectedFile
  //               ? selectedFile.name
  //               : "Drag & Drop or Choose file to upload"}
  //           </div>
  //           <div className="text-[#603AE5] text-xs text-center">
  //             JPG, PNG, PDF, CVS
  //           </div>
  //         </div>

  //         {errors.file && (
  //           <p className="text-red-500 text-xs mt-2">{errors.file.message}</p>
  //         )}
  //       </div>

  //       <div className="flex justify-center mb-8">
  //         <Button
  //           type="submit"
  //           className="bg-[#603AE5] hover:bg-indigo-700 text-white py-6 px-10 rounded-lg text-lg"
  //         >
  //           Add Receipt
  //         </Button>
  //       </div>
  //     </form>
  //   );
  // };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[700px] w-full p-0 border-none rounded-xl overflow-hidden">
        <DialogTitle></DialogTitle>

        <div className="bg-white p-8">
          <div className="flex justify-between items-center mb-8 mt-2">
            <h1 className="text-xl font-medium text-gray-500">EasyUpload</h1>

            <div className="flex items-center space-x-6">
              <Tabs
                defaultValue={activeTab}
                onValueChange={setActiveTab}
                className="w-auto"
              >
                <TabsList className="bg-transparent  h-auto p-0">
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
                  <TabsTrigger
                    value="bank"
                    className={cn(
                      "px-8 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    )}
                  >
                    Bank
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          {activeTab === "receipts" ? (
            // <Receipts />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-500 mb-2">Document Owner</p>
                  <div className="relative">
                    <Input
                      {...register("documentOwner")}
                      className={cn(
                        "border-0 border-b p-0 rounded-none text-black font-medium text-lg focus-visible:ring-0 focus-visible:ring-offset-0",
                        errors.documentOwner
                          ? "border-red-500"
                          : "border-gray-200"
                      )}
                      placeholder="Enter document owner"
                    />
                    {errors.documentOwner && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.documentOwner.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">Client</p>
                  <div className="relative">
                    <Controller
                      name="client"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "border-0 border-b rounded-none px-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full",
                              errors.client
                                ? "border-red-500"
                                : "border-gray-200"
                            )}
                          >
                            <SelectValue
                              placeholder="Select Client"
                              className="text-gray-400"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {clients.map((client) => (
                              <SelectItem key={client} value={client}>
                                {client}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.client && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.client.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                {...getRootProps()}
                className={cn(
                  "border border-dashed rounded-lg p-10 mb-8 flex gap-3  items-center justify-center cursor-pointer",
                  isDragActive
                    ? "border-indigo-600 bg-indigo-50"
                    : errors.file
                    ? "border-red-500"
                    : "border-gray-300"
                )}
              >
                <Input
                  {...getInputProps()}
                  className="h-full w-full z-50 bg-red-400"
                />
                <div className="bg-gray-100 p-5 rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#603AE5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[#603AE5] text-sm font-medium mb-2">
                    {selectedFile
                      ? selectedFile.name
                      : "Drag & Drop or Choose file to upload"}
                  </div>
                  <div className="text-[#603AE5] text-xs text-center">
                    JPG, PNG, PDF, CVS
                  </div>
                </div>

                {errors.file && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.file.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center mb-8">
                <Button
                  type="submit"
                  className="bg-[#603AE5] hover:bg-indigo-700 text-white py-6 px-10 rounded-lg text-lg"
                >
                  Add Receipt
                </Button>
              </div>
            </form>
          ) : activeTab === "bank" ? (
            <div className="h-96">
              <div>This is Bank</div>
            </div>
          ) : (
            <div className="h-96">
              <div>This is Bills</div>
            </div>
          )}

          <div>
            <p className="text-gray-500 mb-4">Send Over Email</p>

            <div className="flex items-center justify-start mb-4 gap-3 ">
              <div className="flex items-center">
                <p className="font-medium mr-2">Single :</p>
                <p className="text-indigo-600">abc.single@gmail.com</p>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => copyToClipboard("abc.single@gmail.com")}
                  className="text-gray-500 hover:text-gray-700 flex items-center gap-1 cursor-pointer "
                >
                  {copiedEmail === "abc.single@gmail.com" ? (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-start gap-3 cursor-pointer">
              <div className="flex items-center">
                <p className="font-medium mr-2">Multiple :</p>
                <p className="text-indigo-600">abc.multiple@gmail.com</p>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => copyToClipboard("abc.multiple@gmail.com")}
                  className="text-gray-500 hover:text-gray-700 flex items-center gap-1 cursor-pointer "
                >
                  {copiedEmail === "abc.multiple@gmail.com" ? (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
