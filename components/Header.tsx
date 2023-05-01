import React from 'react'

const Header = () => {
  return (
    <header className="h-[100px] flex justify-center bg-yellow-300 border-0">
        <div className="flex flex-col w-[1200px]">

            <div className="flex">
                <div className="p-[11px]">
                    <img src="/Assets/img/logo.svg" alt=""/>
                </div>
                <div className="h-[39px] w-[520px] left-[1px] rounded-md bg-white flex items-center mt-[8px] ml-[52px]">
                    <input className="h-[39px] w-[598px] left-[1px] px-[5px] border-none" type="text" placeholder="Buscar productos, marcas y más..."/>
                </div>
            </div>

            <div className="flex">
                <div className="flex items-center pl-[31px] h-[32px]">
                    <span className="font-roboto font-normal font-medium md:font-normal text-base md:text-sm leading-6 md:leading-5 text-gray-700">Ingresa tu domicilio</span>
                </div>
                <nav className="flex items-center ml-[60.35px] h-[32px]">
                    <ul className="flex list-none">
                        
                            <li className=" p-[10px]"><a href="">Categorias</a></li>
                            <li className=" p-[10px]"><a href="">Ofertas</a></li>
                            <li className=" p-[10px]"><a href="">Historial</a></li>
                            <li className=" p-[10px]"><a href="">Supermercado</a></li>
                            <li className=" p-[10px]"><a href="">Moda</a></li>
                            <li className=" p-[10px]"><a href="">Vender</a></li>
                            <li className=" p-[10px]"><a href="">Ayuda / PQR</a></li>
                       
                    </ul>
                </nav>
                 <div className="w-[295px] h-[52px] absolute left-[856px] top-[48px]">
                    <nav className="flex items-center w-screen h-[32px] pl-[200px]">
                        <a className=" p-[10px]" href="">Crear tu cuenta</a>
                        <a className=" p-[10px]" href="">Ingresa</a>
                        <a href="">Mis compras</a>
                    </nav>
                 </div> 

            </div>
            
            
        </div>  
    </header>  
  );
};

export { Header };