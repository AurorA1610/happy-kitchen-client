import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts/ExploreProducts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Pay from './Pages/Dashboard/Pay/Pay';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import AllOrders from './Pages/Dashboard/AllOrders/AllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <ExploreProducts></ExploreProducts>
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/allorders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <h1>Page Not Found</h1> 
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
