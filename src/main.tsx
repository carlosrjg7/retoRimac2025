import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/Router";
import { UserProvider } from "./context/user/UserProvider";
import { QuotationProvider } from "./context/quotation/QuotationProvider";
import "./styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <QuotationProvider>
        <Router />
      </QuotationProvider>
    </UserProvider>
  </StrictMode>
);
