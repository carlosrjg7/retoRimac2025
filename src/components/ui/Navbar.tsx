export default function Navbar({ handleBack }: { handleBack: () => void }) {
  return (
    <div className='navbar'>
      <div className='navbar__steps'>
        <span className=''>1. Planes y coberturas</span>
        <span className=''>2. Resumen</span>
      </div>
      <button className='navbar__nav-item' onClick={handleBack}>
        <span className='navbar__nav-item-icon'></span> Volver
      </button>
    </div>
  );
}
