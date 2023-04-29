
import { FormasPago } from '@/components/FormasPago'
import { Ofertas } from '@/components/Ofertas'
import { Layout } from '@/layouts/Layout'
import { Head } from 'next/document'
import React from 'react'

const formasPagoInfo = {
    focus: [
        {
            image: '/Assets/icon/card.svg',
            description: 'Hasta 48 cuotas'
        },
        {
            image: '/Assets/icon/casa.svg',
            description: 'Transferencia desde tu banco'
        },
        {
            image: '/Assets/icon/billete.svg',
            description: 'Paga en efectivo'
        }


    ]
}
const ofertaInfo = {
    focus: [
        {
            imageof: '/Assets/img/silla.png ',
            precio: '$ 210.900',
            porcentaje: '32% OFF',
            envio: 'Envio gratis'
        },
        {
            imageof: '/Assets/img/microfono.png ',
            precio: '$ 74.990',
            porcentaje: '25% OFF',
            envio: 'Envio gratis'
        },
        {
            imageof: '/Assets/img/afeitadora.png ',
            precio: '$ 149.900',
            porcentaje: '25% OFF',
            envio: 'Envio gratis'
        },
        {
            imageof: '/Assets/img/ropero.png ',
            precio: '$ 149.900',
            porcentaje: '32% OFF',
            envio: 'Envio gratis'
        },
        {
            imageof: '/Assets/img/cortina.png ',
            precio: '$ 69.990',
            porcentaje: '32% OFF',
            envio: 'Envio gratis'
        }

    ]
}

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
                                    )
                                })}


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
                                    )
                                })}



                            </div>
                        </div>

                    </section>

                    <section className="suscribir">
                        <div className="sub-container">
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
                                        <div className="plataformas-sub">
                                            <img src="/Assets/icon/Disney.svg" alt="" />
                                            <span>Disney+ sin cargo</span>
                                        </div>
                                        <div className="plataformas-sub">
                                            <img src="/Assets/icon/start.svg" alt="" />
                                            <span>Star+ sin cargo</span>
                                        </div>
                                        <div className="plataformas-sub">
                                            <img src="/Assets/icon/camion.svg" alt="" />
                                            <span className="texto-informativo">
                                                Envíos gratis y rápidos desde $ 90.000 y 40% OFF
                                                en envios de menos de $ 90.000

                                            </span>
                                        </div>

                                    </div>


                                </div>
                                <div className="contenedor-boton-azul">

                                    <input className="btn-sub" type="button" value="Suscribete" />

                                </div>

                            </div>

                        </div>

                    </section>

                    <section className="beneficios">
                        <div className="contenedor-beneficios">
                            <div className="titulo-mercado">
                                <span className="titulo-sec"> Beneficios de Mercado Puntos</span>
                                <span className="ver-sec">Ver todos los beneficios</span>

                            </div>
                            <div className="cards-bene">

                                <div className="items-disney forma-beneficio">

                                    <div className=" disney-gradient items-log">
                                        <img src="/Assets/icon/comboplus.svg" alt="" />

                                        <div className="info-bene">
                                            <div>
                                                <span className="titulo-ben">Sin cargo con el nivel 6</span>
                                            </div>
                                            <span className="subtitulo-ben">Disney+ y Star+</span>
                                        </div>

                                    </div>


                                </div>

                                <div className="items-hbo forma-beneficio" >

                                    <div className="hbo-gradient items-log">
                                        <img src="/Assets/icon/hbomax.svg" alt="" />
                                        <div className="info-bene">
                                            <div>
                                                <span className="dias-ben">7 DIAS GRATIS</span>
                                            </div>
                                            <div>
                                                <span className="titulo-ben">Hasta 50% OFF</span>
                                            </div>
                                            <span className="subtitulo-ben">HBO Max</span>
                                        </div>

                                    </div>


                                </div>

                                <div className="items-paramaunt forma-beneficio" >

                                    <div className="paramaunt-gradient items-log">
                                        <img src="/Assets/icon/paramount.svg" alt="" />
                                        <div className="info-bene">
                                            <div>
                                                <span className="dias-ben">7 DIAS GRATIS</span>
                                            </div>
                                            <div>
                                                <span className="titulo-ben">Hasta 50% OFF</span>
                                            </div>
                                            <span className="subtitulo-ben">Paramount+</span>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </section>

                    <section className="descubre">
                        <div className="contenedor-descubre">
                            <div className="titulo-descubre">
                                <span className="titulo-sec">Descubre</span>

                            </div>

                            <div className="contenedores-card-des">
                                <div className="card-descubre">
                                    <div className="info-caja">

                                        <div className="sub">
                                            <span className="text">RENUEVA TUS ESPACIOS</span>
                                        </div>
                                        <div className="info">
                                            <span className="text-main">HOGAR Y MUEBLES </span>
                                            <span className="text-main">HASTA 50% OFF</span>
                                        </div>

                                        <input className="btn-descubre" type="button" value="Ver más" />
                                    </div>
                                    <div className="img-hogar">
                                        <img src="/Assets/img/hogar.png" alt="" />
                                    </div>

                                </div>

                                <div className="card-descubre">
                                    <div className="info-caja">

                                        <div className="sub">
                                            <span className="text">SUSCRíBETE AL NIVEL 6</span>
                                        </div>

                                        <div className="info">
                                            <span className="text-main">POR SOLO </span>
                                            <span className="text-main">$17.899 CADA MES</span>
                                        </div>

                                        <input className="btn-descubre" type="button" value="Suscribirme" />
                                    </div>
                                    <div className="img-hogar">
                                        <img src="/Assets/img/Box.png" alt="" />
                                    </div>

                                </div>
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

                    <section className="supermercado">
                        <div className="container-super">
                            <div className="titulo">
                                <h2 className="title-col">Colecciones:</h2>
                                <h2 className="title-sup">Supermercado</h2>
                                <img src="/Assets/icon/Vector.svg" alt="" />
                            </div>
                            <div className="container-item-super">
                                <div className="des-super">
                                    <div className="img-super">
                                        <img src="/Assets/img/supermercado.png" alt="" />
                                    </div>
                                    <div className="info-super">
                                        <span className="text">DESCUBRE</span>
                                        <span className="text-main">SUPERMERCADO</span>
                                    </div>
                                </div>
                                <div className="items-products">
                                    <div className="items-all"><img src="/Assets/img/eucerin.png" alt="" /></div>
                                    <div className="items-all"><img src="/Assets/img/cicatricure.png" alt="" /></div>
                                    <div className="items-all"><img src="/Assets/img/celula.png" alt="" /></div>
                                    <div className="items-all"><img src="/Assets/img/pomada.png" alt="" /></div>
                                    <div className="items-all"><img src="/Assets/img/fideo.png" alt="" /></div>
                                    <div className="items-all"><img src="/Assets/img/lalico.png" alt="" /></div>
                                    <div className="items-all"><img src="/Assets/img/pomadaEucerin.png" alt="" /></div>
                                    <div className="items-all"><img src="/Assets/img/tionacho.png" alt="" /></div>

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

                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/carro.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Carro,Motos y Otros</span>
                                    </div>
                                </div>


                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/computador.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Computación</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/camisa.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Ropa y Accesorios</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/sofa.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Hogar y Muebles</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/volante.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Accesorios para Vehiculos</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/estufa.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Electrodomésticos</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/camara.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Cámaras y Accesorios</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/celular.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Celulares y Teléfonos</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/labial.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Belleza y Cuidado Personal</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/balon.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Deportes y Fitness</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/microfono.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Electrónica,Audio y Video</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/control.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Consola y Videojuegos</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/oso.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Juegos y Juguetes</span>
                                    </div>
                                </div>
                                <div className="contenido-categoria">
                                    <img src="/Assets/icon/herramienta.svg" alt="" />
                                    <div className="text-categoria">
                                        <span>Herramientas</span>
                                    </div>
                                </div>


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