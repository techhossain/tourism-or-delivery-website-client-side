import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import Menu from './components/Shared/Menu';
import SingleTour from './components/Shared/SingleTour/SingleTour';
import BookTour from './components/Tours/BookTour/BookTour';
import SingleTourDetails from './components/Tours/SingleTourDetails/SingleTourDetails';
import Tours from './components/Tours/Tours';
import AuthProvider from './contexs/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/tours/:id">
            <SingleTourDetails></SingleTourDetails>
          </PrivateRoute>

          <Route path="/tours">
            <Tours></Tours>
          </Route>

          <PrivateRoute path="/book-now/:id">
            <BookTour></BookTour>
          </PrivateRoute>




          {/* <PrivateRoute path="/tours/:id">
            <SingleTourDetails></SingleTourDetails>
          </PrivateRoute> */}



          <PrivateRoute path="/add-new">
            <Services></Services>
          </PrivateRoute>

          <PrivateRoute path="/my-orders">
            <Services></Services>
          </PrivateRoute>

          <PrivateRoute path="/manage-all-orders">
            <Services></Services>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
