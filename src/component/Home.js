import React, { useContext, useEffect } from 'react'
import farukhImg from '../assets/images/farukh.jpg'
import myContext, { useContextValues } from './myContext'
import './style.css'
const Home = () => {
  const [state, dispatch] = useContextValues()

  useEffect(() => {
    // console.log(state)
    dispatch({
      type: 'ADD',
      payload: {
        id: 'sdhfgjshgdf',
        name: 'arun',
      },
    })
  }, [])

  return (
    <>
      <div className="homeMaindiv">
        <div className="imgDiv">
          <img
            className="imgMain"
            src="https://picsum.photos/500/600"
            alt="image not available"
          />
        </div>
        <div className="Details">
          <h2>Name:farukh Patel</h2>
          <h3>Qualification: B.tech in computer science</h3>
          <h3>Skills: Html,Css,JavaScript,React.js,Node.js</h3>
        </div>
      </div>
    </>
  )
}
export default Home
