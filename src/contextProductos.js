/*import React, {createContext, useContext,useEffect,useState} from 'react';
import axios from 'axios';

const contextProductos  = createContext();

export function ProductoProvider({ children }) {
    const [productoData, SetProductoData] = useState([]); 


useEffect(()=>{
    async function fetchProductoData() {
        try {
        const response = await axios.get('https://dummyjson.com/docs/products');
        SetProductoData(response.data);
        } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        }
    }
    
    fetchProductoData();
    }, []);

    return (
        <contextProductos.Provider value={{ productoData }}>
            {children}
        </contextProductos.Provider>
        );
        
    }

    export function useProduto() {
        return useContext(contextProductos);
        }*/