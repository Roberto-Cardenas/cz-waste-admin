import Header from './components/Header.js';
import Admin from "./components/Admin.js";
import Login from "./components/Login.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename = '/waste-admin' >
      <div>
        {/* Header */}
        <Header />

        {/* Main content */}
        <main>
          {/* Login Page */}
          <Route path = "/" exact component = {Login} />

          {/* Admin Page */}
          <Route path = "/dashboard" component = {Admin} />
        </main>
      </div>
    </Router>
  );
}

export default App;
