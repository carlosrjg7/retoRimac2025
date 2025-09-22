import Logo from "../ui/Logo";
import icon from "@/assets/images/GlTelephoneSolid.svg";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__content'>
        <Logo className='header__logo' />
        <div className='header__contact'>
          <span className='header__info'>¡Compra por este medio!</span>
          <span className='header__phone'>
            <img src={icon} alt='phone' />
            (01) 411 6001
          </span>
        </div>
      </div>
    </header>
  );
}
