import { Table, TableBody, TableCell, TableHead, TableRow,  } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from'axios';
import { get } from 'react-hook-form';


const Home = () => {
    var[value,setvalue]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then((response)=>{
            console.log(response.data.users);
         setvalue(value=response.data.users)
        })
    },[])
  return (
    <div>
    <Table >
        <TableHead>
            <TableRow>
                <TableCell>
                   FIRST NAME
                </TableCell>
                <TableCell>LAST NAME</TableCell>
                <TableCell>AGE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
{value.map((data,ind)=>{
    return <TableRow>
        
        <TableCell>{data.firstName}</TableCell>
        <TableCell>{data.lastName}</TableCell>
        <TableCell>{data.age}</TableCell>
    </TableRow>
})}
        </TableBody>
    </Table>
    </div>
  )
}

export default Home
