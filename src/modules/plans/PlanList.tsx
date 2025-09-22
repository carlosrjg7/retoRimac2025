import type { PlanWithDiscount } from "@/types";
import PlanCard from "./PlanCard";
import { memo } from "react";

type PlanListProps = {
  plans?: PlanWithDiscount[];
  onSelectPlan: (plan: PlanWithDiscount) => void;
};

function PlanList({ plans, onSelectPlan }: PlanListProps) {
  return (
    <section aria-labelledby='plans-title'>
      <div className='plans-grid'>
        {plans?.map((plan, index) => (
          <PlanCard
            key={index}
            plan={plan}
            index={index}
            onSelectPlan={onSelectPlan}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(PlanList);
