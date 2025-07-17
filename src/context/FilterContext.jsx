import { createContext, useContext, useEffect, useReducer } from "react";
import filterReducer from "../reducer/filterReducer";
import { useProducts } from "../hooks/useProducts";

const initialState = {
    filter_products:[],
    all_products:[],
    filters :{ category: 'ALL', text: '' },
    sorting_value:'lowest'
}

const FilterContext = createContext();

const FilterProvider = ({children}) => {
    const {dataProducts} = useProducts();
    const [state,dispatch] = useReducer(filterReducer,initialState)

    useEffect(()=>{
        dispatch({type:'FILTER_PRODUCTS'})
    },[state.filters]);

    
    // 1 
    useEffect(()=>{
        dispatch({
            type: 'LOAD_FILTER_PRODUCTS',
            payload: dataProducts
        })
    },[dataProducts]) 


    // 2
    function getUniqueData(data,property) {
        let newValue = data.all_products.map(item => item[property]);
            return newValue = ['ALL', ...new Set(newValue)]
    }
    const categoryOnlyData = getUniqueData(state,'category')


    // 3
    function updateFilterValue(e) {
        const {name,value} = e.target;
        dispatch({
            type:'UPDATE_FILTER_VALUE',
            payload:{name,value}
        })
    }


    // ----------------------------------------- filtrar por precio ------------------------------------- 

    function getSortValue() {
        dispatch({type:'GET_SORT_VALUE'})
    }

    useEffect(()=>{
        dispatch({
            type:'SORTING_FILTER',
            payload:dataProducts
        })
    },[dataProducts,state.sorting_value])


    return (
        <FilterContext.Provider value={{...state, categoryOnlyData, updateFilterValue, getSortValue}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => useContext(FilterContext);
export {FilterProvider,useFilterContext}