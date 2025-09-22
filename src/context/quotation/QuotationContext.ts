import { createContext } from "react";
import type { QuotationForm } from "@/types";

export interface QuotationContextProps {
  quotation: QuotationForm | null;
  setQuotation: (data: QuotationForm) => void;
  updateQuotation: (data: Partial<QuotationForm>) => void;
  clearQuotation: () => void;
}

export const QuotationContext = createContext<
  QuotationContextProps | undefined
>(undefined);
