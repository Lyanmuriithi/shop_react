import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from "./components/ProtectedRoute";
import Layout from "./components/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Product from "./pages/product";
import Sales from "./pages/sales";
import Contact from "./pages/contact";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<Protected />}>
            <Route path="/product" element={<Product />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
// import React from "react";
// import Dashboard from './pages/dashboard'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App: React.FC = () => {
//        return (
//         <Router>
//            <Routes>
//               <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//         </Router>
//        );
//       };
//   export default App;
