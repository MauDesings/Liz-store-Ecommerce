import React from 'react'
import ItemList from '../../components/itemList/ItemList'
import './appProducts.css'
import SectionCategory from '../../components/sectionCategory/SectionCategory'
import Sort from '../../components/sort/Sort'
import './appProducts.css'
import { useProducts } from '../../hooks/useProducts'
import { useFilterContext } from '../../context/FilterContext'

const AppProducts = () => {
  const {isLoading,isError,error} = useProducts();
  const {filter_products} = useFilterContext();

  if (isLoading ) return <p className='loading'>Cargando...</p>
  if (isError ) return <p className='title'>Error:{error}</p>
  
  return (
    <div className='product'>
        <SectionCategory />
        <div className='product__content-sort'>
          <Sort />
            <div className="product__content-grid">
                {
                    filter_products.map(item => (
                        <ItemList key={item.id} {...item}/>
                    ))
                }
            </div>
      </div>
        
    </div>
  )
}

export default AppProducts
