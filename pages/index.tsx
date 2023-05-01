
import { FormasPago } from '@/components/FormasPago'
import { Ofertas } from '@/components/Ofertas'
import { Layout } from '@/layouts/Layout'
import { ofertaInfo } from '@/utils/dataOfertaInfo'
import { formasPagoInfo } from '@/utils/dataFormasPago'
import React from 'react'
import { suscribir } from '@/utils/dataSuscribir'
import { Suscribir } from '@/components/Suscribir'
import { beneficio } from '@/utils/dataBeneficios'
import { Beneficios } from '@/components/Beneficios'
import { Descubre } from '@/components/Descubre'

import { Supermercado } from '@/components/Supermercado'
import { descubreInfo } from '@/utils/dataDescubre'
import { superMercado } from '@/utils/dataSupermercado'
import { categoriaPopular } from '@/utils/dataCategoriaPopular'
import { CategoriaPopular } from '@/components/CategoriaPopular'



const index = () => {
    return (
        <>

            <Layout>
                <div>
                    <section className="imgslider">
                        <div className="slider">
                            <img className="box-border w-full" src="/Assets/img/img1.png" alt="" />
                        </div>
                    </section>

                    <section className="flex justify-center items-center mt-[40px] pl-[160px]  pr-[160px]">
                        <div className="flex justify-center items-center bg-white shadow-sm rounded-md w-[1184px] h-[90px]">
                            <div className="flex justify-center pl-[20.5px]">
                                {formasPagoInfo.focus.map((formapago, index) => {
                                    return (
                                        <FormasPago
                                            key={index}
                                            image={formapago.image}
                                            description={formapago.description}
                                        />
                                    );
                                })};


                            </div>
                            <div className="border-l border-gray-200">
                                <FormasPago
                                    image='/Assets/icon/mas.svg'
                                    description='Más medios de pago'
                                />
                            </div>

                        </div>

                    </section>

                    <section className="flex justify-center items-center flex-col mt-[50px]">
                        <div className="container-ofertas">
                            <div className="info-oferta">
                                <span className="titulo-sec">Oferta</span>
                                <span className="ver-sec">Ver todas</span>
                            </div>

                            <div className="grid grid-cols-5">

                                {ofertaInfo.focus.map((oferta, index) => {
                                    return (
                                        <Ofertas
                                            key={index}
                                            imageof={oferta.imageof}
                                            precio={oferta.precio}
                                            porcentaje={oferta.porcentaje}
                                            envio={oferta.envio}
                                        />
                                    );
                                })}



                            </div>
                        </div>

                    </section>

                    <section className="flex justify-center items-center mt-[57px]">
                        <div className="w-[1180px] h-[340px]  bg-white shadow-md rounded-md">
                            <div className="sub-container-head">
                                <div className="titulo-sub">
                                    <span className="titulo-head">Suscríbete al nivel 6</span>
                                </div>

                                <div className="precio-sub">
                                    <span className="precio-p">$ 50.690</span>
                                    <div>
                                        <span className="precio-g">$ 17.899</span>
                                        <span className="mes">/mes</span>
                                    </div>

                                </div>

                            </div>
                            <div className="sub-container-main">
                                <div className="contenedor-main-sub">
                                    <div className="text-ml-main">
                                        <span className="text-ml">Consigue los mejores beneficios en Mercado Libre</span>
                                    </div>

                                    <div className="plataformas">
                                        {suscribir.focus.map((sub, index) => {
                                            return (

                                                <Suscribir
                                                    key={index}
                                                    imagesub={sub.imagesub}
                                                    descripcion={sub.descripcion}

                                                />

                                            );
                                        })}

                                    </div>


                                </div>
                                <div className="flex justify-end items-center w-[1180px] h-[88px] border-t border-gray-300 pr-[30px]">

                                    <input className="w-[123.72px] bg-blue-500 h-[48px] rounded-[6px] text-white" type="button" value="Suscribete" />

                                </div>

                            </div>

                        </div>

                    </section>

                    <section className="flex items-center justify-center">
                        <div className="flex flex-col justify-center items-start gap-[23px] w-[1180px] h-[399.19px]">
                            <div className="flex justify-center items-center pl-[2px] pt-[40px]">
                                <span className="titulo-sec"> Beneficios de Mercado Puntos</span>
                                <span className="ver-sec">Ver todos los beneficios</span>

                            </div>
                            <div className="flex justify-center items-center gap-[16px]">

                                {beneficio.focus.map((bene, index) => {
                                    return (

                                        <Beneficios
                                            key={index}
                                            imageLog={bene.imageLog}
                                            aviso={bene.aviso}
                                            titulo={bene.titulo}
                                            subtitulo={bene.subtitulo}
                                            items={bene.items}
                                            gradient={bene.gradient}

                                        />

                                    );
                                })}



                            </div>

                        </div>
                    </section>

                    <section className="flex justify-center items-center">
                        <div className="flex flex-col justify-center p-[56.12px]">
                            <div className="pb-[19.19px] pl-[8px]">
                                <span className="titulo-sec">Descubre</span>

                            </div>

                            <div className="flex justify-center gap-[16px] h-[265px] w-[1200px]">

                                {descubreInfo.focus.map((desc, index) => {
                                    return (

                                        <Descubre
                                            key={index}
                                            imagedes={desc.imagedes}
                                            titulo={desc.titulo}
                                            titulo2={desc.titulo2}
                                            texto={desc.texto}

                                        />

                                    );
                                })}

                            </div>



                        </div>

                    </section>

                    <section className="tiendas">

                        <div className="container-tienda">

                            <div className="titulo-tienda">
                                <span className="titulo-sec">Las mejores tiendas te esperan</span>
                                <span className="ver-sec">Ver tiendas</span>
                            </div>

                            <div className="card-tienda">


                                <div className="card">

                                    <div className="fondo-lego">
                                        <div className="logo">
                                            <img className="atributo" src="/Assets/icon/logo-lego.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="atrib">
                                        <div className="titulo-item">
                                            <span>Lego</span>
                                        </div>


                                        <div className="container-juguetes">
                                            <div className="items-jueguete">
                                                <img className="item-img" src="/Assets/img/juguete-moto.png" alt="" />
                                            </div>
                                            <div className="items-juguete">
                                                <img className="item-img" src="/Assets/img/juguete-robot.png" alt="" />
                                            </div>
                                            <div className="items-jueguete">
                                                <img className="item-img" src="/Assets/img/juguete-carro.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="ver-tienda">
                                            <span>Ver tienda</span>
                                        </div>

                                    </div>


                                </div>

                                <div className="card">
                                    <div className="fondo-xiaomi">
                                        <div className="logo">
                                            <img className="atributo" src="/Assets/icon/logo-xiaomi.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="atrib">
                                        <div className="titulo-item">
                                            <span>Xiaomi</span>
                                        </div>


                                        <div className="container-juguetes">
                                            <div className="items-jueguete">
                                                <img className="item-img" src="/Assets/img/reloj.png" alt="" />
                                            </div>
                                            <div className="items-juguete">
                                                <img className="item-img" src="/Assets/img/monopatin.png" alt="" />
                                            </div>
                                            <div className="items-jueguete">
                                                <img className="item-img" src="/Assets/img/patin.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="ver-tienda">
                                            <span>Ver tienda</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="card" >

                                    <div className="fondo-oster">
                                        <div className="logo">
                                            <img className="atributo" src="/Assets/icon/logo-oster.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="atrib">
                                        <div className="titulo-item">
                                            <span>Oster</span>
                                        </div>


                                        <div className="container-juguetes">
                                            <div className="items-jueguete">
                                                <img className="item-img" src="/Assets/img/tasa.png" alt="" />
                                            </div>
                                            <div className="items-juguete">
                                                <img className="item-img" src="/Assets/img/licuadora.png" alt="" />
                                            </div>
                                            <div className="items-jueguete">
                                                <img className="item-img" src="/Assets/img/arrocera.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="ver-tienda">
                                            <span>Ver tienda</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="card">
                                    <div className="fondo-nilon">
                                        <div className="logo">
                                            <img className="atributo" src="/Assets/icon/logo-nikon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="atrib">
                                        <div className="titulo-item">
                                            <span>Nikon</span>
                                        </div>


                                        <div className="container-juguetes">
                                            <div className="items-jueguete">
                                                <img className="item-img" src="/Assets/img/auricular.png" alt="" />
                                            </div>
                                            <div className="items-juguete">
                                                <img className="item-img" src="/Assets/img/conector.png" alt="" />
                                            </div>
                                            <div className="items-jueguete">
                                                <img className="item-img" src="/Assets/img/camara.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="ver-tienda">
                                            <span>Ver tienda</span>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>
 

                    <section className="flex justify-center items-center bg-gray-200 mt-[36px]">
                        <div className="pt-[36px]">
                            <div className="flex flex-row pb-[24px]">
                                <h2 className="font-roboto text-[26px] font-light leading-[26px] tracking-normal text-left text-gray-600">Colecciones:</h2>
                                <h2 className="font-roboto font-semibold text-[26px] leading-[26px] text-gray-600">Supermercado</h2>
                                <img src="/Assets/icon/Vector.svg" alt="" />
                            </div>
                            <div className="flex gap-[16px]">
                                <div className="des-super">
                                    <div className="w-[383px] h-[285px]">
                                        <img src="/Assets/img/supermercado.png" alt="" />
                                    </div>
                                    <div className="info-super">
                                        <span className="font-roboto text-[12px] font-semibold leading-[12px] tracking-wider text-gray-700 uppercase">DESCUBRE</span>
                                        <span className="font-roboto font-semibold text-[22px] leading-[31px] text-gray-700">SUPERMERCADO</span>
                                    </div>
                                </div>
                                <div className="items-products">
                                    {superMercado.focus.map((superM, index) => {
                                        return (

                                            <Supermercado
                                                key={index}
                                                imageSuper={superM.imageSuper}

                                            />

                                        );
                                    })}

                                </div>
                            </div>

                        </div>

                    </section>

                    <section className="categorias-populares">
                        <div className="contenedor-categorias">
                            <div className="titulo-categoria">
                                <div className="titulo-sec">Categorías populares</div>
                            </div>
                            <div className="items-categoria">

                            {categoriaPopular.focus.map((cate, index) => {
                                        return (

                                            <CategoriaPopular
                                                key={index}
                                                icon={cate.icon}
                                                text={cate.text}                                                

                                            />

                                        );
                                    })}


                            </div>

                        </div>

                    </section>

                    <section className="pago-envio-seguridad">
                        <div className="main-contenedor-pago">
                            <div className="contenedor-tarjet">
                                <div className="icono-tarj">
                                    <img src="/Assets/icon/tarjeta-pago.svg" alt="" />

                                </div>
                                <div className="texto-titulo">
                                    <span className="titulo-tarjet">Paga con tarjeta o en efectivo</span>

                                </div>
                                <div>
                                    <p className="overflow-visible">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco,
                                        o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</p>
                                </div>
                                <div>
                                    <span className="ver-sec">Cómo pagar con Mercado Pago</span>
                                </div>


                            </div>
                            <div className="contenedor-tarjet">
                                <div className="icono-tarj">
                                    <img src="/Assets/icon/caja.svg" alt="" />

                                </div>
                                <div className="texto-titulo">
                                    <span className="titulo-tarjet">Envío gratis desde $ 90.000</span>

                                </div>
                                <div>
                                    <p>Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.</p>
                                </div>
                                <div>
                                    <span className="ver-sec">Conoce más sobre este beneficio</span>
                                </div>


                            </div>
                            <div className="contenedor-tarjet">
                                <div className="icono-tarj">
                                    <img src="/Assets/icon/seguro.svg" alt="" />

                                </div>
                                <div className="texto-titulo">
                                    <span className="titulo-tarjet">Seguridad, de principio a fin</span>

                                </div>
                                <div>
                                    <p>¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                                </div>
                                <div>
                                    <span className="ver-sec">Cómo te protegemos</span>
                                </div>


                            </div>
                        </div>


                    </section>
                </div>
            </Layout>
        </>
    )
}

export default index