import logoDesktop from "@/assets/images/Logo-white-D.png";
import logoMobile from "@/assets/images/Logo-white-M.png";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <picture className='footer__logo'>
          <source srcSet={logoDesktop} media='(min-width: 1024px)' />
          <img src={logoMobile} alt='Logo' />
        </picture>
        <span className='footer__copy'>© 2023 RIMAC Seguros y Reaseguros.</span>
      </div>
    </footer>
  );
}
