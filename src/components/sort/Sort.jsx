import './sort.css'
import { useFilterContext } from '../../context/FilterContext'

const Sort = () => {
  const {getSortValue} = useFilterContext();
  const {filter_products} = useFilterContext();
  
  return (
    <div className='sort'>
        <span>{filter_products.length ? `Productos disponibles` : `Producto no disponible`}</span>
        <form className='sort__form'>
            <label htmlFor="sorting">
                Ordenar por :
                <select className='sort__select' name="sorting" id="sorting" onClick={getSortValue}>
                    <option value="lowest">Precio(más bajo)</option>
                    <option value="highest">Precio(más alto)</option>
                    <option value="a-z">Precio(a-z)</option>
                    <option value="z-a">Precio(z-a)</option>
                </select>
            </label>
        </form>
    </div>
  )
}

export default Sort
