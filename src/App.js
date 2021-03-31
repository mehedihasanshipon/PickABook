import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminSection from './Components/AdminSection/AdminSection';
import OrderSection from './Components/OrdersSection/OrderSection';
import CheckOut from './Components/CheckOut/CheckOut';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orders">
          <OrderSection />
        </Route>
        <Route path="/admin">
          <AdminSection />
        </Route>
        <Route path="/checkout/:id">
          <CheckOut />
        </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;
