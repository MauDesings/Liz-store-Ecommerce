import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

const initialState = {
    dataProducts:[],
    featuredProducts:[],
    isLoading: false,
    isError: false,
    error: null
}

function useProducts() {
    const [data ,setData] = useState(initialState);

    // obtener los productos almacenados en firebase
    useEffect(()=>{
        async function getProoducts() {
            setData((prev)=>({
                ...prev,
                isLoading: true,
                isError: false,
                error: null,
            }))

            try {
                const db = getFirestore();
                const querySnapShot = await getDocs(collection(db,'products'));
                const newData = querySnapShot.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                const newDataFeatured = newData.filter(item=> item.featured === true);

                setData((prev)=>({
                    ...prev,
                    dataProducts: newData,
                    featuredProducts: newDataFeatured
                }))
                
            } catch (err) {
                setData((prev)=>({
                    ...prev,
                    isError: true,
                    error: err
                }))

            } finally {
                setData((prev)=>({
                    ...prev,
                    isLoading: false
                }))
            }
        }
        getProoducts();
    },[])

    return {
        ...data
    }
}

export {useProducts};