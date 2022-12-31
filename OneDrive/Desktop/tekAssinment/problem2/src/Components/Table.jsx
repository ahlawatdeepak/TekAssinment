import { useEffect, useState } from "react"
import {Table,Thead,Tr,Th,TableContainer, Heading,Button} from '@chakra-ui/react'
import { ShowAllData } from "./AllData"
import { useDispatch, useSelector } from "react-redux"
import { GetAllData } from "../Reducer/tax.action"
import { Link } from "react-router-dom"

// this data is use in JSON-SERVER for apply all functionality *****************************

// let data={
//     "invoices": [
//         {"sno": 1, "amount": 2300, "item_type": 0},
//         {"sno": 2, "amount": 23500, "item_type": 1},
//         {"sno": 3, "amount": 35000, "item_type": 2},
//         {"sno": 4, "amount": 45500, "item_type": 0.5},
//         {"sno": 5, "amount": 55000, "item_type": 4},
//         {"sno": 6, "amount": 6500, "item_type": 1.5},
//         {"sno": 7, "amount": 79000, "item_type": 6},
//         {"sno": 8, "amount": 65500, "item_type": 1},
//         {"sno": 9, "amount": 23000, "item_type": 2}
//         ]
        
// }


export const ShowTable=()=>{
    const {data,loading,error}=useSelector(store=>store.list)  // get all the data by useSelctor 
    const dispatch=useDispatch()  
   
      

    // ************* Onload the page  dipatch the  apifunction and get all data by useSelector ******************
    useEffect(()=>{
       dispatch(GetAllData())
    },[])



    return(
        <>

        {/*  here i am useing Chakra UI for table and other things */}
            <Heading mt='20px'>Calculate All tax </Heading>
            <Link to='/csv'><Button mt='20px' colorScheme='blue'>Upload csv file</Button></Link>



            {/* when data is loading  */}
           { loading ? <Heading mt='20px'>Data Loading....</Heading> : ""}

           {/* if got error  */}
           {error ? <Heading mt='20px'>Something went wrong </Heading> : ""}
         

        
           <TableContainer mt='60px' mb='30px'>

           <Table  variant='striped' colorScheme='gray'   border='1px solid gray' m='auto' w='60%'  >
           <Thead>
                 <Tr  backgroundColor='black' >
                    <Th color='white'>S.No</Th>
                    <Th color='white'>Amount</Th>
                    <Th color='white'>Item Type</Th>
                    <Th color='white'>Calculate Tax</Th>
                 </Tr>
           </Thead>
             
              {/* here i am give the data of of ShowAllData Component to show all data in DOM */}
              <ShowAllData data={data}/>
           </Table>


           </TableContainer>

            
        </>
    )
}