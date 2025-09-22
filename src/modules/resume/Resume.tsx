import type { PlanWithDiscount, QuotationFor, User } from "@/types";

type ResumeProps = {
  user: User;
  plan: PlanWithDiscount;
  quotationFor: QuotationFor;
};

export default function Resume({ user, plan, quotationFor }: ResumeProps) {
  return (
    <section>
      <h2>Resumen de Cotización</h2>
      <p>Usuario: {user.name}</p>
      <p>Plan Seleccionado: {plan.name}</p>
      <p>Tipo de Cotización: {quotationFor}</p>
    </section>
  );
}
