import { Tbody,Tfoot,Tr,Th,Td,Button,Box, TableCaption, } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { CalTax } from '../Reducer/tax.action'

   


export const ShowAllData=({data})=>{
    const  tax=useSelector(store=>store.list.tax)  // use useSelector  to get tax value 
    const dispatch=useDispatch()
    
     
    

    // onClick on Calclate the below function is active and get the  tax 
    const handleTax=(el)=>{
        
        if(el.item_type > 2 || el.item_type < 0) {  // if item_type is graterthan 2 or smaller than 0 then give a alert to user
            alert("item_type must be smaller than 3 and grater than isequal to 0")
            return 
        }
        else{

            let res=0
             if(el.item_type==0){
                res+=el.amount*5/100
             }
             else if(el.item_type==1){
                res+=el.amount*8/100
             }
             else if(el.item_type==2){
                res+=el.amount*12/100
             }
             else{
                // if both the condition are not match then give a alert to user
                
                alert("item_type must be smaller than 3 and grater than isequal to 0")
                return 
             }

            // when calculate is done  give the calculated value of store by dispatch the below api 
             
            dispatch(CalTax(res))
        }
    }



    return(
        <>
        
        {/* map throw all the data and return tbody */}

            <Tbody  mt='30px'>
                {data && data.map((el)=>{
                    return(
                    <Tr key={el.id || el.sno}>
                    <Td>{el.id || el.sno}</Td>
                    <Td>{el.amount}</Td>
                    <Td>{el.item_type}</Td>
                    <Button onClick={()=> handleTax(el)} mt='10px'>Calculate</Button>
                    </Tr>
                    )
                })}
            </Tbody>
           
     {/* For show the tax value  **********************/}
            {data &&  <Tfoot >
                <Tr>
                    <Th>Calculated Tax Value : </Th>
                    <Box m='auto' mt='5px' w='170%' textAlign='left' pl='7px' border='1px solid gray'>{tax}</Box>
                </Tr>
            </Tfoot>}

            

        
          
        </>
    )
}