import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {

    let params= useParams();
    const [details, setDetails]= useState({});

const fetchDetails = async ()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
   const detailData = await data.json();//to save the data that is fetched from the api in (const data)
 setDetails(detailData)  //set the data that was saved in [const detailData] which was originally fetched from [const data] and what is being fetched is an object and that's the reason for the{} in useState({})
}

useEffect(()=>{
    fetchDetails();
},[params.name])
  return (
    <div>
         {details.title}
    </div>
  )
}

export default Recipe