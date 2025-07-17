import { collection, getDocs, getFirestore, query, where } from "firebase/firestore/lite";
import { useState } from "react";

const initialState = {
    singleProduct: {},
    isSingleLoading: false,
    isSingleError: false,
    singleError: null
}

function useSingleProduct() {
    const [data,setData] = useState(initialState);

    // obtener un solo producto de fireBase segun su iD
    async function getSingleParams(ID) {
        setData((prev)=>({
            ...prev,
            isSingleLoading: true,
            isSingleError: false,
            singleError: null
        }))

        try {
            const db = getFirestore();
            const q = query(collection(db,'products'),where('id', '==', Number(ID)));
            const querySnapShot = await getDocs(q);

            if (querySnapShot.empty) {
                throw new Error("Producto no encontrado");
            }

            const docSnap = querySnapShot.docs[0];
            const newProduct = {docId: docSnap.id, ...docSnap.data()}
            setData((prev)=>({
                ...prev,
                singleProduct: newProduct
            }))

        } catch (err) {
            console.error('Error al obtener el producto único:', err)

            setData((prev)=>({
                ...prev,
                singleProduct: {},
                isSingleError: true,
                singleError: err.mesagge 
            }))

        } finally {
            setData((prev)=>({
                ...prev,
                isSingleLoading: false,
            }))
        }
    }

    return {
        ...data,
        getSingleParams
    }
}

export {useSingleProduct};