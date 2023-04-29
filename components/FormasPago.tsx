import React from 'react'

interface FormasPagoProps{
  image:string;
  description:string;

}   

const FormasPago = ({image , description}:FormasPagoProps) => {
    return (
        <div className="flex items-center gap-[16px] w-[304.66px] h-[130px] p-[20.5px]">
            <img src={image} alt="" />
            <span>{description}</span>
        </div>
    )
}

export { FormasPago } 