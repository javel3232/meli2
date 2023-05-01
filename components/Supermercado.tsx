import React from 'react'
interface SupermercadoProps {
    imageSuper: string;

}

const Supermercado = ({imageSuper}:SupermercadoProps) => {
  return (
    <div className="items-all"><img src={imageSuper} alt="" /></div>
  );
};

export {Supermercado};