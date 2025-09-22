import { memo } from "react";
import { ChoicePlanOptions } from "@/constants";
import PlanCardChoice from "./PlanCardChoice";

type BeneficiaryFormProps = {
  onOptionSelect: (value: "myself" | "someone-else") => void;
  userName: string;
};

function BeneficiaryForm({ onOptionSelect, userName }: BeneficiaryFormProps) {
  return (
    <header className='plans__header'>
      <h1 className='plans__header-title'>
        {userName} ¿Para quién deseas cotizar?
      </h1>
      <p className='plans__header-subtitle'>
        Selecciona la opción que se ajuste más a tus necesidades.
      </p>
      <form className='plans__cards-container'>
        {ChoicePlanOptions.map((option, index) => (
          <PlanCardChoice
            key={index}
            onOptionSelect={onOptionSelect}
            icon={option.icon}
            title={option.title}
            subtitle={option.subtitle}
            valueOption={option.valueOption as "myself" | "someone-else"}
          />
        ))}
      </form>
    </header>
  );
}

export default memo(BeneficiaryForm);
