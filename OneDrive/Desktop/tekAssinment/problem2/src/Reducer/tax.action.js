import axios from "axios"
import { err, GetTax, load, success } from "./tax.types"



// get all data  of api and dispatch types to add data in reduer 
 
export const GetAllData=()=>async(dispatch)=>{
    dispatch({
        type:load
    })
    try {
            let res=await axios.get('https://lazy-plum-mackerel-slip.cyclic.app/invoices')
            //  console.log(res)
            dispatch({
                type:success,
                payload:res.data

            })
    } catch (error) {
        dispatch({
            type:err
        })
    }
}


export const CalTax=(tax)=>async(dispatch)=>{
     dispatch({
        type:GetTax,
        payload:tax
     })
}