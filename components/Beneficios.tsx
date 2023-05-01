import React from 'react'
interface BeneficiosProps {

    imageLog: string;
    aviso: string;
    titulo: string;
    subtitulo: string;
    items: string;
    gradient: string;
    
}
const Beneficios = ({imageLog, titulo, subtitulo, aviso, items, gradient}: BeneficiosProps) => {
    return (


        <>
            <div className= {`${items}`} >

                <div className={`${gradient}`}>
                    <img src={imageLog} alt="" />

                    <div className="flex flex-col justify-center gap-[4.97px] pl-[16px]">
                        <div>
                            <span className="text-white font-roboto font-semibold text-xs leading-4">{aviso}</span>
                        </div>
                        <div>
                            <span className="text-white font-roboto font-semibold text-base leading-6">{titulo}</span>
                        </div>
                        <span className="text-white font-roboto font-normal text-base leading-5">{subtitulo}</span>
                    </div>

                </div>
            </div>
        </>


    );
};

export { Beneficios };