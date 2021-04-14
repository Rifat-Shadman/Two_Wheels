
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import AddBike from './Components/AddBike/AddBike';
import ManageBike from './Components/ManageBike/ManageBike';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipment from './Components/Shipment/Shipment';
import OrderReview from './Components/OrderReview/OrderReview';
import Checkout from './Components/Checkout/Checkout';

export const UserContext = createContext()
export const SelectedContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [selectedBike, setSelectedBike] = useState([]);
  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      <SelectedContext.Provider value= {[selectedBike,setSelectedBike]}>
    <Router>
      <Header></Header>
      <div>
        
        <hr />
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/about">
            
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>

          <PrivateRoute path="/orderReview">
            <OrderReview></OrderReview>
          </PrivateRoute>

          <PrivateRoute path="/addBikes">
            <AddBike></AddBike>
          </PrivateRoute>

          <PrivateRoute path="/manageBikes">
            <ManageBike ></ManageBike>
          </PrivateRoute>

          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </Router>
      </SelectedContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
