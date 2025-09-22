import type { PlanWithDiscount, User } from "@/types";
import IconFamily from "@/assets/images/gl_family-24x24.png";

type ResumeProps = {
  user: User;
  documentNumber: string;
  plan: PlanWithDiscount;
  phone: string;
  documentType: string;
};

export default function Resume({
  user,
  plan,
  phone,
  documentType,
  documentNumber,
}: ResumeProps) {
  return (
    <section className='resume-content'>
      <h2 className='resume-content-header'>Resumen del seguro</h2>
      <div className='resume-content-details'>
        <small>Precios calculados para:</small>
        <div className='resume-content-details-user'>
          <img src={IconFamily} alt='icon-family' />
          <span>
            {user.name} {user.lastName}
          </span>
        </div>
        <div className='resume-content-details-data'>
          <div className='resume-content-details-data-responsable'>
            <p className='title'>Responsable de pago</p>
            <p>
              {documentType}: {documentNumber}
            </p>
            <p>Celular: {phone}</p>
          </div>
          <div className='resume-content-details-data-customer'>
            <p className='title'>Plan elegido</p>
            <p>{plan.name}</p>
            <p>Costo del Plan: ${plan.finalPrice} al mes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
