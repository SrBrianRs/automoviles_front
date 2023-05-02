import React from 'react';
import './../styles/Perfil.css';
import Foto from './../img/foto.jpg';



function Perfil() {
  return (
    <div className="profile">
      <img src={Foto} alt="Foto" className="avatar" />
      <h1>Brian Sanchez Robles</h1>
      <h2>Ingenieria de software</h2>
      <h2>S19004873</h2>
      <h2>Orizaba Veracruz</h2>
      <h2>srbrianrs@outlook.com</h2>
      <h2><a href="https://www.facebook.com/srbrianrs">Facebook</a></h2>
      <h2><a href="https://www.instagram.com/srbriansanchez/">Instagram</a></h2>
      <h2><a href="https://www.linkedin.com/in/brian-s%C3%A1nchez-40588b196/">Likedin</a></h2>
    </div>
  );
}

export default Perfil;
