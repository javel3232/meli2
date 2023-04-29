import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">

    <div className="container-footer">
        <div className="seccion-info">
            <div className="lista-u">
    
            <ul className="selectores">
                <li className="itm ">Trabaja con nosotros</li>
                <li className="itm ">Términos y condiciones</li>
                <li className="itm ">Términos y condiciones</li>
                <li className="itm ">Accesibilidad</li>
                <li className="itm ">Ayuda / PQR</li>
                <li className="itm ">www.sic.gov.co</li>
              </ul>
           
            </div>
            <div className="info-copir">
                <span className="copira">Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
                <span className="copira">Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
            </div>
    
        </div>
    
        <div className="section-iconos">
    
            <div className="img-iconos">
                <img src="/Assets/img/industria.png" alt=""/>
                <img src="/Assets/img/pare.png" alt=""/>
    
            </div>
    
        </div>
    
        
    </div>
    

   </footer>
  )
}

export { Footer };