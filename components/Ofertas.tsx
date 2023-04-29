import React from 'react'

interface OfertasProps {
    imageof: string;
    precio: String;
    porcentaje: String;
    envio: String;

}

const Ofertas = ({ imageof, precio, porcentaje, envio }: OfertasProps) => {
    return (
        <div className="flex justify-center items-center flex-col w-[224px] h-[350px] m-[8px] bg-white shadow-md rounded-md">
            <img src={imageof} alt="" />
            <div className="w-[224px] h-[130.38px] p-[16px] border-t border-gray-400 border-opacity-25">
                <div className="informacion">
                    <span>{precio}</span>
                    <span className="font-roboto font-normal text-base leading-4 p-[10.33px] text-green-600">{porcentaje}</span>
                </div >
                <span className="font-roboto font-medium text-green-600 text-sm leading-5 pt-[5px]">{envio}</span>

                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 border border-green-500 rounded p-[5px] ">
                    Agregar al carrito
                </button>
            </div>



        </div>
    )
}

export { Ofertas }