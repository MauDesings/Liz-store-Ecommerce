import React from 'react'
import './appHome.css'
import ItemList from '../../components/itemList/ItemList'
import CardService from '../../components/cardServices/cardService'
import SvgDelivery from '../../components/svg/svgDelivery'
import SvgSeguros from '../../components/svg/SvgSeguros'
import SvgCredit from '../../components/svg/SvgCredit'
import SvgGps from '../../components/svg/SvgGps'
import { useProducts } from '../../hooks/useProducts'
import { NavLink } from 'react-router-dom'

const AppHome = ({greeting}) => {
  const {featuredProducts} = useProducts();

  return (
    <>
        <div className='home'>
            <h3 className='home__greeting'>{greeting}</h3>
            <h1 className='title'>Eleva Tu Estilo</h1>
            <NavLink to='/productos'>
              <button className='home__btn'>Mostrar ahora</button>
            </NavLink>
        </div>

        <h2 className='subtitle'>Productos Destacados</h2>

        <div className='home__content-grid'>
          {
            featuredProducts.map(item=>(
              <ItemList key={item.id} {...item} />
            ))
          }
        </div>

        <div className='home__content-clip-path'>
            <div className='home__left'>
                <h3>¡LLAMANDO A LOS AMANTES DE LA MODA!</h3>
                <p>Hasta 50% en la oferta más grande</p>
            </div>
            <div className='home__rigth-img'></div>
        </div>

        <div className='home__content-services'>
            <h2 className='subtitle'>Por qué elegirnos</h2>

            <div className='home__content-items-grid'>
                <CardService
                title='ENVÍOS GRATIS A TODO EL PERÚ'
                description='por compras mayores a S/ 99'
                image={<SvgDelivery />} />

                <CardService
                title='PAGOS 100% SEGUROS'
                description='con Mercado Pago'
                image={<SvgSeguros />} />

                <CardService
                title='CUOTAS SIN INTERESES*'
                description='con todas las tarjetas'
                image={<SvgCredit />} />

                <CardService
                title='RECOJOS GRATIS'
                description='en nuestras 4 tiendas'
                image={<SvgGps />} />
            </div>
        </div>
    </>
  )
}

export default AppHome
