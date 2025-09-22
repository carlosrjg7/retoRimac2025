import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "@/components/routing/PrivateRoute";
import NotFound from "@/views/NotFound";
import AppLayout from "@/components/layout/AppLayout";

const PlansView = lazy(() => import("@/views/plans/PlansView"));
const QuotationView = lazy(() => import("@/views/quotation/QuotationView"));
const ResumeView = lazy(() => import("@/views/resume/ResumeView"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<QuotationView />} index />
            <Route
              path='/plans'
              element={
                <PrivateRoute>
                  <PlansView />
                </PrivateRoute>
              }
            />
            <Route
              path='/plans/resume'
              element={
                <PrivateRoute>
                  <ResumeView />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
