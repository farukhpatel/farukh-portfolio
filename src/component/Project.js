import React from 'react'
import './style.css'
const Project = () => {
  return (
    <>
      <h1 style={{ marginTop: '12px', textAlign: 'center', color: '#0373fc' }}>
        Projects
      </h1>
      <div className="">
        <div className="oneProjectDetails">
          <div>
            <h2> 1.Project Name: Real time pizza order web app</h2>
            <h4 style={{ marginTop: '12px' }}>
              This Project allow user to order pizza and also track a order
              status in a real time . Create admin panel for admin to manage
              order status
            </h4>
            <h5>
              Link:{' '}
              <a
                target="_blank"
                href="https://real-time-pizza-order.herokuapp.com/"
              >
                click here
              </a>{' '}
            </h5>
          </div>
          <div>
            <h2> 2.Project Name: File Sharing</h2>
            <h4 style={{ marginTop: '12px' }}>
              You can upload your file on the server and share link to others
              for download purpose
            </h4>
            <h5>
              Link:{' '}
              <a
                target="_blank"
                href="https://file-share-project.herokuapp.com/"
              >
                click here
              </a>{' '}
            </h5>
          </div>
          <div>
            <h2> 3.Project Name:Dairy milk</h2>
            <h4 style={{ marginTop: '12px' }}>
              In this project admin can add customer in our dairy and can add
              milk data on daily basis and also search milk history with the
              help of customer ID
            </h4>
            <h5>
              Link:{' '}
              <a target="_blank" href="https://dairymilkreact.herokuapp.com/">
                click here
              </a>{' '}
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
export default Project
