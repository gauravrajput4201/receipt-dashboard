import React from "react";

interface InvoiceProps {
  id: number | null;
}

const Invoice: React.FC<InvoiceProps> = ({ id }) => {
  return (
    <div>
      <div className="max-w-3xl w-[550px] bg-white shadow-md p-8 pb-8 text-[#15827f] ">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#15827f]">INVOICE</h1>
          <div className="text-right">
            <h2 className="text-lg font-semibold">Marble BEAUTY & SPA</h2>
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <div className="text-sm">
            <p className="font-semibold text-[#15827f]">Bill to</p>
            <p>Business Company 123</p>
            <p>Grand Avenue, 29102</p>
            <p>Country +00 000 000</p>
            <p>000 CIF: 0000000ABC</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-[#15827f]">Invoice</p>
            <p className="text-xs">#{id}</p>
            <p className="font-semibold mt-2 text-[#15827f]">Date</p>
            <p className="text-xs">00/00/00</p>
          </div>
        </div>
        <hr className="border-t border-[#15827f] my-3" />
        <div className=" py-2 mt-4">
          <div className="grid grid-cols-4 text-[#15827f] font-semibold text-sm">
            <p>Description</p>
            <p className="text-center">Price</p>
            <p className="text-center">Qty</p>
            <p className="text-right">Total</p>
          </div>
        </div>

        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-4 py-2 text-[#15827f] last:border-0 text-xs"
          >
            <p>Service description</p>
            <p className="text-center">00,00€</p>
            <p className="text-center">1</p>
            <p className="text-right">00,00€</p>
          </div>
        ))}

        <hr className="border-t border-[#15827f] my-3" />
        <div className=" py-2 mt-4 flex justify-between">
          <div className="">
            <div>
              <div className="font-semibold text-[#15827f] ]">
                Payment Mathod
              </div>
              <div className="text-[#15827f] text-xs">
                By Bank London State Bank LN34 00 <br />
                1238 99 6876 1587
              </div>
            </div>
            <div className="mt-3">
              <div className="font-semibold text-[#15827f] ]">
                Terms & Conditions
              </div>
              <div className="text-[#15827f] text-xs w-[60%]">
                By accessing our services, you agree to the terms, policies,
                privacy, usage, compliance, liability
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-11 items-center justify-between">
              <p className="font-semibold text-[#15827f]">Subtotal</p>
              <p className="text-right text-[#15827f] text-xs">00,00€</p>
            </div>
            <div className="flex gap-11 items-center justify-between my-3">
              <p className="font-semibold text-[#15827f]">Tax</p>
              <p className="text-right text-[#15827f] text-xs">00,00€</p>
            </div>
            <div className="flex gap-11 items-center justify-between ">
              <p className="font-semibold text-[#15827f]">Total</p>
              <p className="text-right text-[#15827f] text-xs">00,00€</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-11 text-sm h-16 bg-[#15827f] text-white flex justify-between items-center">
        <div>info@marblespa.com</div>
        <div>www.marblespa.com</div>
      </div>
    </div>
  );
};

export default Invoice;
