import React from 'react'
import ReactDOM from 'react-dom/client'

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header className='main-header'>
      <HeaderSection />
    </header>
  )
}

function HeaderSection() {
  return (
    <section className='header'>
      <HeaderContent />
    </section>
  );
}

function HeaderContent() {
  return (
    <article className='contenido-header'>
      <HeaderIcon />
      <Logo />
      <HeaderOptions />
    </article>
  );
}

function HeaderIcon() {
  return (
    <div className='icono-menu-lateral-header icono-menu-lateral-wrapper hidden'>
      <img className='icono-menu-lateral' src='assets/icons/header/menu.svg' alt='menu lateral' />
    </div>
  );
}

function Logo() {
  return (
    <div className='logo-wrapper'>
      <a href='index.html'>
        <img className='logo' src='assets/img/logo/logo.png' alt='logo' />
      </a>
    </div>
  );
}

function HeaderOptions() {
  const options = [
    { className: 'agencia', icon: 'calendario.png', text: 'Agencia y cita previa' },
    { className: 'ayuda', icon: 'informacion.png', text: 'Centro de ayuda' },
    { className: 'identificate', icon: 'usuario.png', text: 'Identifícate' },
    { className: 'contacto', icon: 'telefono.svg', text: '911 22 33 44' },
  ];

  return (
    <div className='opciones-header'>
      {options.map((option, index) => (
        <React.Fragment key={index}>
          <HeaderOption {...option} />
          {index < options.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
}

function HeaderOption({ className, icon, text }) {
  return (
    <div className={`opcion-header ${className}`}>
      <a href='#'>
        <img className='icono-header' src={`assets/icons/header/${icon}`} alt={text} />
        <p>{text}</p>
      </a>
    </div>
  );
}

function Divider() {
  return <div className='barra-divisoria-header'></div>;
}

function Main() {
  
}

function Footer() {
  
}

const ROOT = ReactDOM.createRoot(document.getElementById('root'))
ROOT.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)