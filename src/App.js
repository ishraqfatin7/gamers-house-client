import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import AdminNav from './components/Admin/AdminNav';
import AddProduct from './components/AddProduct/AddProduct';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Order from './components/Orders/Order';
export const UserContext = createContext();
export const ProductsContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
            <AdminNav></AdminNav>
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/manageProduct">
              <ManageProduct></ManageProduct>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
              <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/orders">
              <Order></Order>
          </PrivateRoute>
         
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
