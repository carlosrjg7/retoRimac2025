import { useState, type ReactNode } from "react";
import { QuotationContext } from "./QuotationContext";
import type { QuotationForm } from "@/types";

export const QuotationProvider = ({ children }: { children: ReactNode }) => {
  const [quotation, setQuotationState] = useState<QuotationForm | null>(null);

  const setQuotation = (data: QuotationForm) => setQuotationState(data);
  const clearQuotation = () => setQuotationState(null);
  const updateQuotation = (data: Partial<QuotationForm>) => {
    setQuotationState((prev) => (prev ? { ...prev, ...data } : prev));
  };

  return (
    <QuotationContext.Provider
      value={{ quotation, setQuotation, clearQuotation, updateQuotation }}
    >
      {children}
    </QuotationContext.Provider>
  );
};
