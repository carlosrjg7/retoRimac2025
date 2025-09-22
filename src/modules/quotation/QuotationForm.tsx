import { memo } from "react";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { DocumentTypeSchema, type QuotationFormData } from "@/types";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type QuotationFormProps = {
  register: UseFormRegister<QuotationFormData>;
  errors: FieldErrors<QuotationFormData>;
};

function QuotationForm({ register, errors }: QuotationFormProps) {
  const options = DocumentTypeSchema.options;

  return (
    <>
      <div className='quotation-form__group'>
        <select
          className='quotation-form__group-select'
          {...register("documentType", {
            required: "El tipo de documento es obligatorio",
          })}
        >
          <option value=''>Seleccionar...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <input
          className='quotation-form__group-input'
          type='text'
          placeholder='N° Documento'
          {...register("documentNumber", {
            required: "El número de documento es obligatorio",
          })}
        />
      </div>
      {errors.documentType && (
        <ErrorMessage>{errors.documentType.message}</ErrorMessage>
      )}
      {errors.documentNumber && (
        <ErrorMessage>{errors.documentNumber.message}</ErrorMessage>
      )}

      <input
        className='quotation-form__group-input-full'
        type='text'
        placeholder='Celular'
        {...register("phoneNumber", {
          required: "El número de celular es obligatorio",
        })}
      />
      {errors.phoneNumber && (
        <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
      )}

      <label className='checkbox-container'>
        <input
          type='checkbox'
          {...register("acceptTerms", {
            required: "Debe aceptar la política de privacidad",
          })}
        />
        <span className='custom-checkbox'></span>
        Acepto las políticas de privacidad
      </label>
      {errors.acceptTerms && (
        <ErrorMessage>{errors.acceptTerms.message}</ErrorMessage>
      )}

      <label className='checkbox-container'>
        <input
          type='checkbox'
          {...register("acceptPrivacyPolicy", {
            required: "Debe aceptar la política de comunicaciones comerciales",
          })}
        />
        <span className='custom-checkbox'></span>
        Acepto la política de comunicaciones comerciales
      </label>
      {errors.acceptPrivacyPolicy && (
        <ErrorMessage>{errors.acceptPrivacyPolicy.message}</ErrorMessage>
      )}
      <a href='#' className='quotation-form__link'>
        Aplican Términos y Condiciones.
      </a>
    </>
  );
}

export default memo(QuotationForm);
