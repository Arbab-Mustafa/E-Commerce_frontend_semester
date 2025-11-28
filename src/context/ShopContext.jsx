import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

// creating a context var
export const ShopContext=createContext();

// creating context provider fn

const ShopContextProvider=(props)=>{

    const currency='$';
    const delivery_fee=10;
    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const [cartItems,setCartItems]=useState({});
    const [products,setProducts]=useState([]);
    const [token,setToken]=useState('')
    const navigate=useNavigate()

    const addToCart=async (itemId,size)=>{
        if(!size){
            toast.error('Select Product Size');
            return;
        }
        // to create copy of object
        let cartData=structuredClone(cartItems);
        // if item already exists
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1
            }
            else{
                // create new entry
                cartData[itemId][size]=1;
            }
        }
        // if item does not exist
        else{
            // new entry
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData)
       if(token){
        try {
            await axios.post(`${backendUrl}/api/cart/add`,{itemId,size},{headers:{token}})
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
       }
        
    }

    const getCartCount=()=>{
        let totalCount=0;
        // for single item-product id with size value
        for (const items in cartItems) {

            // for items size- single product sizes key-value
           for(const item in cartItems[items] ){
            try {
                if (cartItems[items][item]) {
                    totalCount+=cartItems[items][item];
                }
            } catch (error) {
                
            }
           }
        }
        return totalCount;
    }
    
    const updateQuantity=async(itemId,size,quantity)=>{
        let cartData=structuredClone(cartItems)
        // updating quantity
        cartData[itemId][size]=quantity;
        setCartItems(cartData)
 if(token){
        try {
            await axios.post(`${backendUrl}/api/cart/update`,{itemId,size,quantity},{headers:{token}})
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
       }
    }
    const getCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>product._id===items)
            for(const size in cartItems[items]){
                try {
                    if(cartItems[items][size]>0){
                        totalAmount+=itemInfo.price*cartItems[items][size]
                    }
                } catch (error) {
                    console.log(error);
                    
                }
            }
        }
        return totalAmount;
    }
    
     const getProductsData=async()=>{
        try {
            const response=await axios.get(`${backendUrl}/api/products/list`)
            if(response.data.success){
                setProducts(response.data.products)
            }else{
                toast.error(response.data.message)
                
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
     }

     const getUserCart=async(token)=>{
        try {
            const response=await axios.post(`${backendUrl}/api/cart/get`,{},{headers:{token}})

            if(response.data.success){
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
     }

     useEffect(()=>{
        getProductsData()
     },[])
     useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))

            getUserCart(localStorage.getItem('token'))
        }
     },[])
    const value={
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,setCartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,token,setToken
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

// 3.34.10

// walija@example.com password1234

// 9:59:10
// 10:33:13
// 10:44:58
// 10:56:12