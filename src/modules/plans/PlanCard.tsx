import type { PlanWithDiscount } from "@/types";

type PlanCardProps = {
  plan: PlanWithDiscount;
  index?: number;
  onSelectPlan: (plan: PlanWithDiscount) => void;
};

export default function PlanCard({ plan, index, onSelectPlan }: PlanCardProps) {
  return (
    <article key={index} className='plan-card'>
      <header>
        <h3>{plan.name}</h3>
        {plan.hasDiscount && (
          <p>
            Costo del plan <s>${plan.price}</s>
          </p>
        )}
        <p>
          <strong>${plan.finalPrice} al mes</strong>
        </p>
      </header>
      <ul>
        {plan.description.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <footer>
        <button type='button' onClick={() => onSelectPlan(plan)}>
          Seleccionar Plan
        </button>
      </footer>
    </article>
  );
}
