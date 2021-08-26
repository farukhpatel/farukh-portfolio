import React, { useContext, useEffect } from 'react'
import farukhImg from '../assets/images/farukh.jpg'
import myContext, { useContextValues } from './myContext'
import './style.css'
const Home = () => {
  const [state, dispatch] = useContextValues()

  useEffect(() => {
    console.log('state', state)
    // dispatch({
    //   type: 'ADD',
    //   payload: {
    //     id: 'sdhfgjshgdf',
    //     name: 'arun',
    //   },
    // })
  }, [])
  useEffect(() => {
    console.log('state', state.value)
  }, [state])

  return (
    <>
      <div className="homeMaindiv">
        <h1>Value {state.value}</h1>
        <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
        <button onClick={() => dispatch({ type: 'DEC' })}>Dec</button>
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
