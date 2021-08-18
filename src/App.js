import logo from './logo.svg'
import './App.css'
import Navbar from './component/Navbar'
import {
  Switch,
  Route,
  HashRouter,
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import API from './utility/ApiConstant'
import axios from 'axios'
import instance from './utility/AxiosConstant'
import Project from './component/Project'
const App = () => {
  // console.log('final url', API.GET_DATA)
  // instance
  //   .get(API.GET_DATA)
  //   .then((res) => {
  //     console.log('res from api', res)
  //   })
  //   .catch((err) => console.log(err))
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
        </Switch>
      </Router>
    </>
  )
}

export default App
