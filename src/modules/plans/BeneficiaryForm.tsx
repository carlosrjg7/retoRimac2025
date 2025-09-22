import { memo } from "react";

type BeneficiaryFormProps = {
  onOptionSelect: (value: "myself" | "someone-else") => void;
  userName: string;
};

function BeneficiaryForm({ onOptionSelect, userName }: BeneficiaryFormProps) {
  return (
    <header>
      <h1>{userName} ¿Para quién deseas cotizar?</h1>
      <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
      <form>
        <legend>
          Selecciona la opción que se ajuste más a tus necesidades.
        </legend>
        <label htmlFor='myself'>
          <figure>icono</figure>
          <input
            type='radio'
            name='quotation-for'
            onChange={() => onOptionSelect("myself")}
          />
          <span>
            <strong>Para mí</strong>
            <br />
            Cotiza tu seguro de salud y agrega familiares si así lo deseas.
          </span>
        </label>

        <label htmlFor='someone-else'>
          <figure>icono</figure>
          <input
            type='radio'
            name='quotation-for'
            onChange={() => onOptionSelect("someone-else")}
          />

          <span>
            <strong>Para alguien más</strong>
            <br />
            Realiza una cotización para uno de tus familiares o cualquier
            persona.
          </span>
        </label>
      </form>
    </header>
  );
}

export default memo(BeneficiaryForm);
