import type { PlanWithDiscount } from "@/types";

type PlanCardProps = {
  plan: PlanWithDiscount;
  index?: number;
  onSelectPlan: (plan: PlanWithDiscount) => void;
  icon: string;
};

export default function PlanCard({
  plan,
  index,
  onSelectPlan,
  icon,
}: PlanCardProps) {
  return (
    <article key={index} className='plan-card'>
      <header className='plan-card__header'>
        <div className='plan-card__header-title'>
          <h3>{plan.name}</h3>
          <img src={icon} alt={`Ícono del plan ${plan.name}`} />
        </div>
        <div className='plan-card__header-price'>
          <span className='plan-card__header-price--original'>
            Costo del plan <br />
          </span>
          {plan.hasDiscount && (
            <>
              <span className='plan-card__header-price--original-amount'>
                ${plan.price} antes
              </span>
            </>
          )}
          <p className='plan-card__header-price--final'>
            <strong>${plan.finalPrice} al mes</strong>
          </p>
        </div>
      </header>
      <ul className='plan-card__benefits'>
        {plan.description.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <footer>
        <button
          className='btn btn--red'
          type='button'
          onClick={() => onSelectPlan(plan)}
        >
          Seleccionar Plan
        </button>
      </footer>
    </article>
  );
}
