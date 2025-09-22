import type { PlanWithDiscount } from "@/types";
import PlanCard from "./PlanCard";
import { memo } from "react";
import { ICONS_PLANS } from "@/constants";

type PlanListProps = {
  plans?: PlanWithDiscount[];
  onSelectPlan: (plan: PlanWithDiscount) => void;
};

function PlanList({ plans, onSelectPlan }: PlanListProps) {
  return (
    <>
      {plans?.slice(0, 3).map((plan, index) => (
        <PlanCard
          key={index}
          plan={plan}
          index={index}
          onSelectPlan={onSelectPlan}
          icon={ICONS_PLANS[index]}
        />
      ))}
    </>
  );
}

export default memo(PlanList);
