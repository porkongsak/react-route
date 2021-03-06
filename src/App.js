import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Category from './Category'
import Products from './Products'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const Admin = () => (
  <div>
    <h2>Welcome Admin</h2>
  </div>
)



const Error = () => (
  <div>
    <h2>Error</h2>
  </div>
)

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/category"><Category /></Route>
        <Route path="/products" component={Products}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="*" component={Error}/>
      </Switch>
      
    </div>
  )
}

export default App