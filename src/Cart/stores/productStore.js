import {create} from "zustand";
export const productStore = create((set)=>
({
products:[],
loading:false,
error:null,
fetchedProducts:async ()=>
{
    set({loading:true});
    try {
        const response= await fetch("https://fakestoreapi.com/products");
        if(!response.ok) throw new Error("error while loading");
        const items = await response.json();
        set({products:items,loading:false})
    } catch (error) {
        set({error:error.message,loading:false})
    }
}
}))