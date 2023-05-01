import React from 'react'
interface SuscribirProps {
    imagesub: string;
    descripcion: String;
}
const Suscribir = ({imagesub , descripcion}:SuscribirProps ) => {
    return (
        <div className="plataformas-sub">
            <img src={imagesub} alt="" />
            <span>{descripcion}</span>
        </div>
    );
};

export { Suscribir };