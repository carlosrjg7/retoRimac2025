import { useCallback, useMemo, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { applyDiscount } from "@/domain/plans/applyDiscount";
import { usePlans } from "@/hooks/usePlans";
import { useQuotation } from "@/hooks/useQuotation";
import { useUser } from "@/hooks/useUser";
import type { PlanWithDiscount, QuotationFor } from "@/types";
const BeneficiaryForm = lazy(() => import("@/modules/plans/BeneficiaryForm"));
const PlanList = lazy(() => import("@/modules/plans/PlanList"));

export default function Plans() {
  const navigate = useNavigate();

  const { plans } = usePlans();

  const { user } = useUser();
  const { updateQuotation, quotation } = useQuotation();

  const handleOptionSelect = useCallback(
    (value: QuotationFor) => {
      updateQuotation({ quotationFor: value, planSelected: null });
    },
    [updateQuotation]
  );

  const handleSelectPlan = useCallback(
    (plan: PlanWithDiscount) => {
      updateQuotation({ planSelected: plan });
      navigate("/plans/resume");
    },
    [navigate, updateQuotation]
  );

  const decoratedPlans: PlanWithDiscount[] = useMemo(
    () =>
      plans.map((plan) =>
        applyDiscount(plan, quotation?.quotationFor ?? "myself")
      ),
    [plans, quotation]
  );

  return (
    <>
      <div className='plans'>
        <div className='plans__content'>
          <section aria-labelledby='choose-plan'>
            <Suspense fallback={<p>Cargando beneficiario...</p>}>
              <BeneficiaryForm
                onOptionSelect={handleOptionSelect}
                userName={user?.name ?? "Usuario"}
              />
            </Suspense>

            {quotation?.quotationFor && (
              <Suspense fallback={<p>Cargando planes...</p>}>
                <PlanList
                  plans={decoratedPlans}
                  onSelectPlan={handleSelectPlan}
                />
              </Suspense>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
