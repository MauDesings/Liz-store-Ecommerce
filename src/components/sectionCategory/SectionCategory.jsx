
import './sectionCategory.css'
import { useFilterContext } from "../../context/FilterContext";

const SectionCategory = () => {
    const {categoryOnlyData, updateFilterValue, filters:{text,category}} = useFilterContext();

  return (
    <div className='category'>
        <div className='category__content-form'>
            <form className='category__form'>
                <input className='category__search'
                type="text"
                name='text'
                value={text}
                onChange={updateFilterValue}
               />
            </form>
        </div>
    
        <h2 className='category__subtitle'>Categoria</h2>

        <div className='category__content-butons'>
            {
                categoryOnlyData.map((item,index)=>(
                    <button className={item === category ? 'category__btn activeFilter' : 'category__btn'}
                        key={index}
                        type='button'
                        name='category'
                        value={item}
                        onClick={updateFilterValue}> 
                        {item}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default SectionCategory
