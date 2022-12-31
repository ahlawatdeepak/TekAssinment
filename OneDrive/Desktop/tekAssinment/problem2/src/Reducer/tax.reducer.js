import { err, GetTax, load, success } from "./tax.types"


const initalState={
    data:[],
    error:false,
    loading:true,
    tax:0,
}

export const  taxReducer=(state=initalState,{type,payload})=>{
    
    switch (type) {
         
        case load : {

            return{
                ...state,
                loading:true
            }
        }
        case err :{
            return {
                ...state,
                loading:false,
                error:true
            }
        }

        case success : {
            return {
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }
       
        case GetTax :{
            return {
                ...state,
                loading:false,
                error:false,
                tax:payload
            }
        }


        default : {
            return state
        }
         
    }
}