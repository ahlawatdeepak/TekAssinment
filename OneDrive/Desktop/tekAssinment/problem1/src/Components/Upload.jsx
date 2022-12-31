import React, { useState } from 'react';
import { CSVLink } from "react-csv"

import {
  useCSVReader,
  formatFileSize,
} from 'react-papaparse';

import {styles} from "./Styles.jsx"




export default function UploadCsv() {
    const { CSVReader } = useCSVReader();  // Csv reader
    const [hover, sethover] = useState(false);  // for styles
    const [data,setData]=useState()    // collect all data for download
 


// calculate tax and add tax value in each element 
   const Addtax=(el)=>{
    
    let output=[]
    el[0].push(' tax')
    output.push(el[0])
    for(let i=1;i<el.length;i++){
        
        let add=el[i]
        
        
        if(+(add[2]) <3 && +(add[2]) >=0){
            add[0]=Number(add[0])
            add[1]=Number(add[1])
            add[2]=Number(add[2])
            if(add[2]==0){
               let tax=add[1]*5/100
           
               add.push(tax)
            }
            else if(add[2]==1){
               let tax=add[1]*8/100
           
               add.push(tax)
            }
            else if(add[2]==2){
               let tax=add[1]*18/100
            
               add.push(tax)
            }
       
           output.push(add)
        }   
   }

   setData(output)
    
}


  
    return (
     
        <>
       
        {/* CSVReader  when  csv upload give the Addtax function to calculate the tax */}
         
        <div style={{marginBottom:'40px'}}>   
      <CSVReader   onUploadAccepted={(results) => {
         
          // console.log(results);
          
          Addtax(results.data)   // when we collect all data then call Addtax function to add tax and give us a calculated tax data
        
          sethover(false);
          
        }}
      >
        {({
          getRootProps,  
          acceptedFile,   // accept the file
          ProgressBar,   // progreessbar for how much file is uploded
          getRemoveFileProps,  // for remove the file
          Remove,     // remove button for remove the file 
        }) => (
          <>
            <div
              {...getRootProps()}
              style={Object.assign({},styles.zone, hover && styles.hover )}
            >
              {acceptedFile ? (
                <>
                  <div style={styles.file}>
                    <div style={styles.info}>
                      <span style={styles.size}>
                        {formatFileSize(acceptedFile.size)}    {/* file size  */}
                      </span>
                      <span style={styles.name}>{acceptedFile.name}</span>   {/* show file name  */}
                    </div>
                    <div style={styles.progressBar}>
                      <ProgressBar />                       {/*  show us progressbar how much file is uploded */}
                    </div>
                    <div
                      {...getRemoveFileProps()}   
                      style={styles.remove}
                     
                    >
                    
                       
                     <span onClick={()=>setData()}> <Remove  color='red' /></span>     {/* Onclick on this this file remove the in our DOM as well as data */}
                      
                    </div>
                  </div>
                </>
              ) : (
                  <button style={styles.button2}>Upload CSV file</button>   // onclick on this button the file should be uploded
              )}
            </div>
          </>
        )} 
       
      </CSVReader>
    </div>

              {/* when we collected the tax calculated data the this below link is show and users are able to download the result.csv file */}
      {data &&  <CSVLink style={styles.download}  data={data}  filename={'result.csv'}  target="_blank" >   Download Result.csv  </CSVLink>  }
      
      
      
      </>
    );
  }