import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Specialists from "./Pages/Specialists/Specialists";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./Compontents/Header/Header";
import ServiceDetail from "./Compontents/ServiceDetail/ServiceDetail";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Footer from "./Compontents/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/contactus">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <PrivateRoute path="/specialists">
              <Specialists></Specialists>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/servicedetail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
