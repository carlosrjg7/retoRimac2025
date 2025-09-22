import { getUser } from "@/api/UserApi";
import QuotationForm from "@/modules/quotation/QuotationForm";
import { useQuotation } from "@/hooks/useQuotation";
import { useUser } from "@/hooks/useUser";
import { QuotationFormSchema, type QuotationFormData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FrameImg from "@/assets/images/Frame1.png";

export default function Quotation() {
  const navigate = useNavigate();

  const { setQuotation } = useQuotation();
  const { setUser } = useUser();

  const initiaValues: QuotationFormData = {
    documentType: "DNI",
    documentNumber: "",
    phoneNumber: "",
    acceptTerms: false,
    acceptPrivacyPolicy: false,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuotationFormData>({
    resolver: zodResolver(QuotationFormSchema),
    defaultValues: initiaValues,
  });

  const handleForm = async (data: QuotationFormData) => {
    try {
      const user = await getUser();
      if (!user) throw new Error("No se pudo obtener los datos del usuario");
      setQuotation(data);
      setUser(user);
      navigate("/plans");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='quotation'>
      <div className='quotation__banner'>
        <div className='quotation__banner-desktop'>
          <img src={FrameImg} alt='Rimac Seguros' />
        </div>
        <div className='quotation__banner-mobile'>
          <div className='quotation__banner-mobile-heading'>
            <span className='tag tag--green'>Seguro Salud Flexible</span>
            <h1>Creado para ti y tu familia</h1>
          </div>
          <img
            className='quotation__banner-mobile-image'
            src={FrameImg}
            alt='Rimac Seguros'
          />
        </div>
      </div>
      <div className='quotation__content-form'>
        <div className='quotation__content-form-desktop-heading'>
          <span className='tag tag--green'>Seguro Salud Flexible</span>
          <h1>Creado para ti y tu familia</h1>
          <p>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
        </div>
        <div className='quotation__content-form-mobile-heading'>
          <p>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
        </div>
        <form
          className='quotation-form'
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <QuotationForm
            errors={{
              documentType: errors.documentType,
              documentNumber: errors.documentNumber,
              phoneNumber: errors.phoneNumber,
              acceptTerms: errors.acceptTerms,
              acceptPrivacyPolicy: errors.acceptPrivacyPolicy,
            }}
            register={register}
          />
          <button className='btn btn--black' type='submit'>
            Cotiza aquí
          </button>
        </form>
      </div>
    </div>
  );
}
