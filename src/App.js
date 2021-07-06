import "./App.css";
import Login from "./pages/Auth/Login/Login";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Screens/Dashboard/Dashboard";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard/login" component={Login} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
