import { z } from "zod";

/* Person user */
export const UserSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  birthDay: z.string(),
});

export type User = z.infer<typeof UserSchema>;

/* Plans */
export const PlanSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.array(z.string()),
  age: z.number(),
});

export const PlanWithDiscountSchema = PlanSchema.extend({
  finalPrice: z.number(),
  hasDiscount: z.boolean(),
});

export type PlanWithDiscount = z.infer<typeof PlanWithDiscountSchema>;

export type Plan = z.infer<typeof PlanSchema>;

export const PlansResponseSchema = z.object({
  list: z.array(PlanSchema),
});

export type PlansResponse = z.infer<typeof PlansResponseSchema>;

/* Quotation Form */
export const DocumentTypeSchema = z.enum(["DNI", "CE", "PASAPORTE"], {
  message: "El tipo de documento es obligatorio",
});

export const QuotationForSchema = z
  .enum(["myself", "someone-else"])
  .nullable()
  .optional();
export type QuotationFor = z.infer<typeof QuotationForSchema>;

export const QuotationFormSchema = z.object({
  documentType: DocumentTypeSchema,
  documentNumber: z
    .string()
    .nonempty({
      message: "El número de documento es obligatorio",
    })
    .regex(/^\d+$/, { message: "El número de documento debe ser numérico" })
    .min(8, {
      message: "El número de documento debe tener entre 8 y 11 caracteres",
    })
    .max(11, {
      message: "El número de documento debe tener entre 8 y 11 caracteres",
    }),
  phoneNumber: z
    .string()
    .nonempty({
      message: "El número de teléfono es obligatorio",
    })
    .regex(/^\d+$/, { message: "El número de teléfono debe ser numérico" })
    .length(9, { message: "El número de teléfono debe tener 9 caracteres" }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar los términos y condiciones",
  }),
  acceptPrivacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar la política de privacidad",
  }),
  quotationFor: QuotationForSchema,
  planSelected: PlanWithDiscountSchema.nullable().optional(),
});

export type QuotationForm = z.infer<typeof QuotationFormSchema>;
export type QuotationFormData = Pick<
  QuotationForm,
  | "documentType"
  | "documentNumber"
  | "phoneNumber"
  | "acceptTerms"
  | "acceptPrivacyPolicy"
>;
