import React from 'react'
interface DescubreProps {
    imagedes: string;
    titulo: String;
    titulo2: String;
    texto: String;
}
const Descubre = ({imagedes,titulo,titulo2,texto}:DescubreProps) => {
    return (
        <div className="flex items-center bg-white shadow-sm rounded-md h-[250px] w-[584px] gap-[32.16px]">
            <div className="flex justify-center flex-col gap-[11px] pl-[32px]">

                <div className="sub">
                    <span className="text">{texto}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-main">{titulo} </span>
                    <span className="text-main">{titulo2}</span>
                </div>

                <input className="w-[96px] h-[36px]  bg-blue-500 rounded-md border-none text-white" type="button" value="Ver más" />
            </div>
            <div className="h-[250px] w-[290px] pl-[19px]  border-0 rounded-0">
                <img src={imagedes} alt="" />
            </div>

        </div>
    );
};

export {Descubre};