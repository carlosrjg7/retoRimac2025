import type { Plan, PlanWithDiscount } from "@/types"; // Adjust the path as needed

export function applyDiscount(
  plan: Plan,
  quotationFor: "myself" | "someone-else"
): PlanWithDiscount {
  const hasDiscount = quotationFor === "someone-else";
  const finalPrice = hasDiscount ? plan.price * 0.95 : plan.price;

  return {
    ...plan,
    finalPrice,
    hasDiscount,
  };
}
