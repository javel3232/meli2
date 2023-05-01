import React from 'react'
interface CategoriaPopularProps {
    icon: string;
    text: string;
}

const CategoriaPopular = ({icon , text}:CategoriaPopularProps) => {
    return (
        <div className="flex justify-center items-center flex-col h-[170px] bg-white border-b border-r border-gray-300 text-center gap-[22px]">
            <img src={icon} alt="" />
            <div className="text-categoria">
                <span>{text}</span>
            </div>
        </div>
    );
};

export {CategoriaPopular};