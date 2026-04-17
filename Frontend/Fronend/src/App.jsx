import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/herader";
import Home from "./page/home";
import Dashboard from "./page/dashboard";
import Login from "./page/login";
import Signup from "./page/signup";
import Service from "./component/service";
import About from "./page/about";
import ManagementLayout from "./page/ManagementLayout";
import Sales from "./page/managment/sales";
import Item from "./page/managment/item";
import Inventory from "./page/managment/inventory";
import Ai from "./page/ai";
import Try from "./component/trial";
function App() {
  const handleLogin = (formData) => {};

  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages with header only */}
        <Route path="/" element={<><Header /><Home /></>} /
        >
        <Route path="/about" element={<><Header /><About /></>} />
        <Route path="/login" element={<><Header /><Login data={handleLogin} /></>} />
        <Route path="/signup" element={<><Header /><Signup /></>} />
        <Route path="/service" element={<><Header /><Service /></>} />
        <Route path="/dashboard" element={<><Header /><Dashboard /></>} />
        <Route path="/ai" element={<><Header /><Ai /></>} />  
        <Route path="/trial" element={<><Header /><Try /></>} />

        {/* Management pages with header and sidebar */}
        <Route path="/management" element={<ManagementLayout />}>
          <Route path="sales" element={<Sales />} />
          <Route path="item" element={<Item />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
