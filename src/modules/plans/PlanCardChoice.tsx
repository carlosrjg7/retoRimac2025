type PlanCardChoiceProps = {
  onOptionSelect: (value: "myself" | "someone-else") => void;
  icon: string;
  title: string;
  subtitle: string;
  valueOption: "myself" | "someone-else";
};

export default function PlanCardChoice({
  onOptionSelect,
  icon,
  title,
  subtitle,
  valueOption,
}: PlanCardChoiceProps) {
  return (
    <label className='card-container-choice'>
      <input
        type='radio'
        name='quotation-for'
        onChange={() => onOptionSelect(valueOption)}
      />
      <div className='card'>
        <div className='card__info'>
          <div className='card__info-header'>
            <figure>
              <img src={icon} alt='icono' />
            </figure>

            <span className='card__info-title'>{title}</span>
          </div>
          <span className='card__info-subtitle'>{subtitle}</span>
        </div>
      </div>
    </label>
  );
}
