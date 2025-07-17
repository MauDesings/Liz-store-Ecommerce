function filterReducer(state,action) {
    switch (action.type) {

        case 'LOAD_FILTER_PRODUCTS':{
            return {
                ...state,
                filter_products : [...action.payload],
                all_products: [...action.payload]
            }
        }

        case 'UPDATE_FILTER_VALUE':{
            const {name,value} = action.payload;
            return {
                ...state,
                filters :{...state.filters, [name]: value}
            }
        }

        case 'FILTER_PRODUCTS':{
            const {all_products} = state;
            let temFilterProducts = [...all_products];
            const {category,text} = state.filters

            if (category !== 'ALL') {
                temFilterProducts = temFilterProducts.filter(item => item.category === category);
            }

            if (text) {
                temFilterProducts = temFilterProducts.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
            }

            return {
                ...state,
                filter_products: temFilterProducts
            }
        }


        // ------------------------------------- filtrar por precio -------------------------------

        case 'GET_SORT_VALUE':{
            const userSortValue = document.getElementById('sorting');
            const user_value = userSortValue.options[userSortValue.selectedIndex].value
            return {
                ...state,
                sorting_value: user_value
            }
        }

        case 'SORTING_FILTER':{
            let newSortData;
            let temSortData = [...action.payload];

            if (state.sorting_value === 'lowest') {
                const sortingProduct = (a,b)=>{
                    return a.price - b.price;
                }
                newSortData = temSortData.sort(sortingProduct);
            }

             if (state.sorting_value === 'highest') {
                const sortingProduct = (a,b)=>{
                    return b.price - a.price;
                }
                newSortData = temSortData.sort(sortingProduct);
            }

            if (state.sorting_value === 'a-z') {
                newSortData = temSortData.sort((a,b)=>
                    a.title.localeCompare(b.title)
                );
            }

            if (state.sorting_value === 'z-a') {
                newSortData = temSortData.sort((a,b)=>
                    b.title.localeCompare(a.title)
                )
            }

            return {
                ...state,
                filter_products: newSortData
            }
        }
           
    
        default:
            return state;
    }
}

export default filterReducer;