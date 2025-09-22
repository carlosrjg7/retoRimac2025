import { useQuotation } from "@/hooks/useQuotation";
import type { FC, JSX } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: FC | JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { quotation } = useQuotation();

  if (!quotation) {
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
}
