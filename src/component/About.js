import axios from 'axios'
import React from 'react'
import API from '../utility/ApiConstant'
const About = () => {
    axios.get(API.GET_DATA).then((res)=>{
        console.log(res);
    }).catch(err=>console.log(err))
    return (
        <>
            <h1>About Component </h1>
        </>
    )
}
export default About