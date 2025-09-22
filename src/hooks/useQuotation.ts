import { useContext } from "react";
import { QuotationContext } from "@/context/quotation/QuotationContext";

export const useQuotation = () => {
  const context = useContext(QuotationContext);
  if (!context) {
    throw new Error("useQuotation debe usarse dentro de QuotationProvider");
  }
  return context;
};
